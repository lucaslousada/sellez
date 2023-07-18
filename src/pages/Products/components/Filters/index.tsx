import { RefineSearch } from './RefineSearch';

import { MagnifyingGlass } from 'phosphor-react';

import { Container, SearchBar } from './styles';

export function Filters() {
  return (
    <Container>
      <SearchBar>
        <MagnifyingGlass />
        <input
          type="text"
          placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN"
        />
        <RefineSearch />
      </SearchBar>
    </Container>
  );
}
