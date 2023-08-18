import { ProductsProvider } from '../../contexts/ProcuctsContext'
import { Menu } from '../../components/Menu'
import { Breadcrumbs } from '../../components/Breadcrumbs'
import { Filters } from './components/Filters'
import { ProductTable } from './components/ProductTable'

import { CaretRight } from 'phosphor-react'

import { Container, Main } from './styles'

export function Products(): JSX.Element {
  return (
    <ProductsProvider>
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
          <ProductTable />
        </Main>
      </Container>
    </ProductsProvider>
  )
}
