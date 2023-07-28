import { useContext } from 'react';
import { ProductsContext } from '../../../../contexts/ProcuctsContext';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';
import { TypeOfProducts } from '../Filters/TypeOfProducts';

import { Table } from './styles';

export function ProductTable() {
  const { products, isLoadingProducts } = useContext(ProductsContext);

  if (isLoadingProducts)
    return (
      <TypeOfProducts>
        <LoadingSpinner size="38px" color="color_700" />
      </TypeOfProducts>
    );

  if (!isLoadingProducts && !products.length)
    return (
      <TypeOfProducts>
        <p>Nada encontrado</p>
      </TypeOfProducts>
    );

  if (!isLoadingProducts && products.length)
    return (
      <TypeOfProducts>
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
      </TypeOfProducts>
    );
}
