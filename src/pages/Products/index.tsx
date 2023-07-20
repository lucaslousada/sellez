import { useEffect, useState } from 'react';
import { Root as TabsRoot } from '@radix-ui/react-tabs';
import { api } from '../../services/api';
import { Menu } from '../../components/Menu';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Filters } from './components/Filters';
import { LoadingSpinner } from '../../components/LoadingSpinner';

import { CaretRight } from 'phosphor-react';

import {
  Container,
  Main,
  Table,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './styles';

type TypesOfProducts = 'all' | 'simple';

interface ProductData {
  id: number;
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
}

export function Products() {
  const [displayedProductTypeTab, setDisplayedProductTypeTab] =
    useState<TypesOfProducts>('all');

  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    async function loadProducts() {
      await api
        .get<ProductData[]>('/products')
        .then(response => setProducts(response.data));
    }

    loadProducts().catch(() => {
      throw new Error('Falha ao buscar os dados dos produtos.');
    });
  }, []);

  return (
    <Container>
      <Menu />
      <Main>
        <Breadcrumbs>
          <li>
            <p>Cadastros</p>
            <CaretRight />
          </li>
          <li>Produtos</li>
        </Breadcrumbs>
        <h1>Produtos</h1>
        <Filters />
        <TabsRoot
          value={displayedProductTypeTab}
          onValueChange={setDisplayedProductTypeTab as (value: string) => void}
          activationMode="manual"
        >
          <TabsList>
            <TabsTrigger value="all">
              todos <p>127</p>
            </TabsTrigger>
            <TabsTrigger value="simple">
              simples <p>110</p>
            </TabsTrigger>
          </TabsList>
          <TabsContent value={displayedProductTypeTab}>
            {!products.length ? (
              <LoadingSpinner size="38px" color="color_700" />
            ) : (
              <Table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>SKU</th>
                    <th>Preço</th>
                    <th>Estoque</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.sku}</td>
                      <td>{`R$ ${product.sale_price}`}</td>
                      <td>{product.stock}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </TabsContent>
        </TabsRoot>
      </Main>
    </Container>
  );
}
