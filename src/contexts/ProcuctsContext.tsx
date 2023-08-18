import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react'
import { type AxiosError } from 'axios'
import { type SortFilterItemType } from '../pages/Products/components/Filters/Sort'
import { type StatusFilterItemType } from '../pages/Products/components/Filters/Status'
import { api } from '../services/api'

import { OverlayWhileCharging } from '../styles/components/OverlayWhileCharging'

interface ProductData {
  id: number
  status: string
  sku: number
  name: string
  stock: number
  sale_price: number
  brand: string
  net_weight: number
  gross_weight: number
  volume_quantity: number
  width: number
  height: number
  length: number
  created_at: string
  update_date: string
}

interface ActiveQueryParameters {
  _sort: SortFilterItemType
  status: StatusFilterItemType
}

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductsContextData {
  products: ProductData[]
  isLoadingProducts: boolean
  activeQueryParameters: ActiveQueryParameters
  changeActiveQueryParameters: Dispatch<SetStateAction<ActiveQueryParameters>>
}

const defaultActiveQueryParameters: ActiveQueryParameters = {
  _sort: 'created_at',
  status: 'active',
}

export const ProductsContext = createContext<ProductsContextData>({
  products: [],
  isLoadingProducts: false,
  activeQueryParameters: defaultActiveQueryParameters,
  changeActiveQueryParameters: () => {},
})

export function ProductsProvider({
  children,
}: ProductsProviderProps): JSX.Element {
  const [products, setProducts] = useState<ProductData[]>([])
  const [isLoadingProducts, setIsLoadingProducts] = useState(true)
  const [activeQueryParameters, setActiveQueryParameters] =
    useState<ActiveQueryParameters>(defaultActiveQueryParameters)

  async function loadProducts(): Promise<void> {
    setProducts([])
    setIsLoadingProducts(true)

    await api
      .get<ProductData[]>('/products', { params: activeQueryParameters })

      .then(
        (response) => {
          setProducts(response.data)
        },
        (error: AxiosError) => {
          throw new Error(
            `Falha ao buscar os dados dos produtos. (${error.message})`,
          )
        },
      )

    setIsLoadingProducts(false)
  }

  useEffect(() => {
    loadProducts()
  }, [activeQueryParameters])

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoadingProducts,
        activeQueryParameters,
        changeActiveQueryParameters: setActiveQueryParameters,
      }}
    >
      {isLoadingProducts && <OverlayWhileCharging />}
      {children}
    </ProductsContext.Provider>
  )
}
