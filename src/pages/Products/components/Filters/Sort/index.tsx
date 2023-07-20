import { useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';

import { SortAscending } from 'phosphor-react';

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
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

        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={setSelectedItem as (value: string) => void}
        >
          <DropdownMenuRadioItem value="name">Nome</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="last">
            Mais recentes
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sku">Código SKU</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
