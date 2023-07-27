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
  sort: 'name' | 'most_recent' | 'update_date' | 'sku';
  status: 'active' | 'disabled' | 'deleted';
}

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextData {
  products: ProductData[];
  changeProductList: Dispatch<SetStateAction<ProductData[]>>;
  activeFilters: ProductFilters;
  changeActiveFilters: Dispatch<SetStateAction<ProductFilters>>;
}

export const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [activeFilters, setActiveFilters] = useState<ProductFilters>({
    page: 1,
    itemsPerPage: 100,
    sort: 'most_recent',
    status: 'active',
  });

  async function loadProducts() {
    const filters = {
      page: `_page=${activeFilters.page}`,
      itemsPerPage: `_limit=${activeFilters.itemsPerPage}`,
      sort: `_sort=${activeFilters.sort}`,
    };

    await api
      .get<ProductData[]>(`/products?${Object.values(filters).join('&')}`)
      .then(
        response => setProducts(response.data),
        (error: AxiosError) => {
          throw new Error(
            `Falha ao buscar os dados dos produtos. (${error.message})`
          );
        }
      );
  }

  useEffect(() => {
    loadProducts();
  }, [activeFilters]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        changeProductList: setProducts,
        activeFilters,
        changeActiveFilters: setActiveFilters,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
