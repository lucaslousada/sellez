import { Menu } from '../../components/Menu';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { CaretRight } from 'phosphor-react';

import { Container, Main } from './styles';

export function Products() {
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
      </Main>
    </Container>
  );
}
