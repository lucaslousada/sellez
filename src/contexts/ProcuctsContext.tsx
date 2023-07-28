import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';
import { AxiosError } from 'axios';
import { api } from '../services/api';
import { SortFilterItemType } from '../pages/Products/components/Filters/Sort';
import { StatusFilterItemType } from '../pages/Products/components/Filters/Status';

interface ProductData {
  id: number;
  status: string;
  sku: number;
  name: string;
  stock: number;
  sale_price: number;
  brand: string;
  net_weight: number;
  gross_weight: number;
  volume_quantity: number;
  width: number;
  height: number;
  length: number;
  created_at: string;
  update_date: string;
}

interface ProductFilters {
  page: number;
  itemsPerPage: number;
  sort: SortFilterItemType;
  status: StatusFilterItemType;
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  products: ProductData[];
  isLoadingProducts: boolean;
  activeFilters: ProductFilters;
  changeActiveFilters: Dispatch<SetStateAction<ProductFilters>>;
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [activeFilters, setActiveFilters] = useState<ProductFilters>({
    page: 1,
    itemsPerPage: 100,
    sort: 'most_recent',
    status: 'active',
  });

  async function loadProducts() {
    setProducts([]);

    const filters = {
      page: `_page=${activeFilters.page}`,
      itemsPerPage: `_limit=${activeFilters.itemsPerPage}`,
      sort: `_sort=${activeFilters.sort}`,
      status:
        activeFilters.status === 'all'
          ? null
          : `status=${activeFilters.status}`,
    };

    const urlParameters = Object.values(filters).filter(
      filterItem => filterItem !== null
    );

    setIsLoadingProducts(true);

    await api.get<ProductData[]>(`/products?${urlParameters.join('&')}`).then(
      response => setProducts(response.data),
      (error: AxiosError) => {
        throw new Error(
          `Falha ao buscar os dados dos produtos. (${error.message})`
        );
      }
    );

    setIsLoadingProducts(false);
  }

  useEffect(() => {
    loadProducts();
  }, [activeFilters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoadingProducts,
        activeFilters,
        changeActiveFilters: setActiveFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
