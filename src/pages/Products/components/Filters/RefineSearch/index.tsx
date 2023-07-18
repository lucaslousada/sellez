import { useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';

import { Faders } from 'phosphor-react';

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles';

type SearchRefinementItemTypes = keyof typeof searchRefinementItems;

const searchRefinementItems = {
  sku: 'SKU',
  gtin_ean: 'GTIN/EAN',
  none: 'Não refinar',
};

export function RefineSearch() {
  const [itemSelectedInSearchRefinement, setItemSelectedInSearchRefinement] =
    useState<SearchRefinementItemTypes>('none');

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        {itemSelectedInSearchRefinement !== 'none' ? (
          <span>{searchRefinementItems[itemSelectedInSearchRefinement]}</span>
        ) : (
          <Faders />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Refinar busca</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => setItemSelectedInSearchRefinement('sku')}
          >
            Código SKU
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setItemSelectedInSearchRefinement('gtin_ean')}
          >
            GTIN/EAN
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setItemSelectedInSearchRefinement('none')}
          >
            Não refinar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
