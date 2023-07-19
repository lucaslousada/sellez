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

export type SelectableItemTypes = keyof typeof selectableItems;

const selectableItems = {
  sku: 'SKU',
  name: 'Nome',
  none: 'Não refinar',
};

export function RefineSearch() {
  const [selectedItem, setSelectedItem] = useState<SelectableItemTypes>('none');

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger selectedItem={selectedItem}>
        {selectedItem !== 'none' ? (
          <span>{selectableItems[selectedItem]}</span>
        ) : (
          <Faders />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Refinar busca</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('name')}
            selectedItem={selectedItem}
            itemValue="name"
          >
            Nome
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('sku')}
            selectedItem={selectedItem}
            itemValue="sku"
          >
            Código SKU
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('none')}
            selectedItem={selectedItem}
            itemValue="none"
          >
            Não refinar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
