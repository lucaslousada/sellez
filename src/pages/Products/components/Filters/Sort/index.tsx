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

type SelectableItemTypes = keyof typeof selectableItems;

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
          <DropdownMenuItem onSelect={() => setSelectedItem('name')}>
            Nome
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedItem('last')}>
            Mais recentes
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedItem('sku')}>
            Código SKU
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
