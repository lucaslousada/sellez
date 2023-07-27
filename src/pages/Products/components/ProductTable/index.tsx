import { useContext, useState } from 'react';
import { Root as TabsRoot } from '@radix-ui/react-tabs';
import { ProductsContext } from '../../../../contexts/ProcuctsContext';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';

import { Table, TabsContent, TabsList, TabsTrigger } from './styles';

type TypesOfProducts = 'all' | 'simple';

export function ProductTable() {
  const { products } = useContext(ProductsContext);

  const [activeProductTypeFilter, setActiveProductTypeFilter] =
    useState<TypesOfProducts>('all');

  return (
    <TabsRoot
      value={activeProductTypeFilter}
      onValueChange={setActiveProductTypeFilter as (value: string) => void}
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
      <TabsContent value={activeProductTypeFilter}>
        {!products?.length ? (
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
  );
}
