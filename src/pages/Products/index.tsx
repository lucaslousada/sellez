import { useState } from 'react';
import { Root as TabsRoot, Content as TabsContent } from '@radix-ui/react-tabs';
import { Menu } from '../../components/Menu';
import { Breadcrumbs } from '../../components/Breadcrumbs';

import { CaretRight } from 'phosphor-react';

import { Container, Main, Table, TabsList, TabsTrigger } from './styles';

type TypesOfProducts = 'all' | 'simple';

export function Products() {
  const [displayedProductTypeTab, setDisplayedProductTypeTab] =
    useState<TypesOfProducts>('all');

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
        <TabsRoot
          value={displayedProductTypeTab}
          onValueChange={setDisplayedProductTypeTab as (value: string) => void}
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
                <tr>
                  <td>Camiseta Cinza</td>
                  <td>32409922</td>
                  <td>R$ 50</td>
                  <td>11</td>
                </tr>
              </tbody>
            </Table>
          </TabsContent>
        </TabsRoot>
      </Main>
    </Container>
  );
}
