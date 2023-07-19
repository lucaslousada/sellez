import { RefineSearch } from './RefineSearch';
import { Sort } from './Sort';
import { Status } from './Status';

import { MagnifyingGlass } from 'phosphor-react';

import { Container, MultipleFilters, SearchBar } from './styles';

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
      <MultipleFilters>
        <li>
          <Sort />
        </li>
        <li>
          <Status />
        </li>
      </MultipleFilters>
    </Container>
  );
}
