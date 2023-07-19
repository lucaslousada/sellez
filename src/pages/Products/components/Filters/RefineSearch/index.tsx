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

type SelectableItemTypes = keyof typeof selectableItems;

const selectableItems = {
  sku: 'SKU',
  name: 'Nome',
  none: 'Não refinar',
};

export function RefineSearch() {
  const [selectedItem, setSelectedItem] = useState<SelectableItemTypes>('none');

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        {selectedItem !== 'none' ? (
          <span>{selectableItems[selectedItem]}</span>
        ) : (
          <Faders />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Refinar busca</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={() => setSelectedItem('name')}>
            Nome
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedItem('sku')}>
            Código SKU
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedItem('none')}>
            Não refinar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
