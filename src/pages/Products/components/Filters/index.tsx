import { useState } from 'react';
import { RefineSearch } from './RefineSearch';
import { Sort } from './Sort';
import { Status } from './Status';

import { MagnifyingGlass } from 'phosphor-react';

import { Container, MultipleFilters, SearchBar } from './styles';

export function Filters() {
  const [inputFieldHasFocus, setInputFieldHasFocus] = useState(false);

  return (
    <Container>
      <SearchBar inputFieldHasFocus={inputFieldHasFocus}>
        <MagnifyingGlass />
        <input
          type="text"
          placeholder="Pesquise por nome, código (SKU) ou GTIN/EAN"
          onFocus={() => setInputFieldHasFocus(true)}
          onBlur={() => setInputFieldHasFocus(false)}
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
