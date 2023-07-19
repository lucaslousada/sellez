import { useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';

import { SortAscending } from 'phosphor-react';

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles';

export type SelectableItemTypes = keyof typeof selectableItems;

const selectableItems = {
  name: 'Nome',
  last: 'Mais recente',
  sku: 'SKU',
};

export function Sort() {
  const [selectedItem, setSelectedItem] = useState<SelectableItemTypes>('name');

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger title="Ordenação">
        <SortAscending />
        {selectableItems[selectedItem]}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Ordernar por</DropdownMenuLabel>

        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('name')}
            selectedItem={selectedItem}
            itemValue="name"
          >
            Nome
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('last')}
            selectedItem={selectedItem}
            itemValue="last"
          >
            Mais recentes
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('sku')}
            selectedItem={selectedItem}
            itemValue="sku"
          >
            Código SKU
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
