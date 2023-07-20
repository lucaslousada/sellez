import { useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles';

export type SelectableItemTypes = keyof typeof selectableItems;

const selectableItems = {
  active: 'Produtos ativos',
  inactivated: 'Produtos inativos',
  deleted: 'Produtos excluídos',
  none: 'Por situação',
};

export function Status() {
  const [selectedItem, setSelectedItem] =
    useState<SelectableItemTypes>('active');

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger selectedItem={selectedItem} title="Situação">
        {selectableItems[selectedItem]}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Situação</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={setSelectedItem as (value: string) => void}
        >
          <DropdownMenuRadioItem value="active">Ativos</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="inactivated">
            Inativos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="deleted">
            Excluídos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="none">Sem filtro</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
