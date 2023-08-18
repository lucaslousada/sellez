import { useContext } from 'react'
import { ProductsContext } from '../../../../contexts/ProcuctsContext'
import { TypeOfProducts } from '../Filters/TypeOfProducts'
import { LoadingSpinner } from '../../../../components/LoadingSpinner'
import { NoRecordsFound } from '../../../../components/NoRecordsFound'

import { Table } from './styles'

export function ProductTable(): JSX.Element | undefined {
  const { products, isLoadingProducts } = useContext(ProductsContext)

  if (isLoadingProducts)
    return (
      <TypeOfProducts>
        <LoadingSpinner size="38px" color="color_700" />
      </TypeOfProducts>
    )

  if (!isLoadingProducts && products.length === 0)
    return (
      <TypeOfProducts>
        <NoRecordsFound
          title="Nenhum resultado encontrado."
          description="Experimente utilizar outras opções de busca."
        />
      </TypeOfProducts>
    )

  if (!isLoadingProducts && products.length > 0)
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
            {products.map((product) => (
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
    )
}
