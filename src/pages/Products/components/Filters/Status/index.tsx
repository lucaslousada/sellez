import { useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';

import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
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

        <DropdownMenuGroup>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('active')}
            selectedItem={selectedItem}
            itemValue="active"
          >
            Ativos
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('inactivated')}
            selectedItem={selectedItem}
            itemValue="inactivated"
          >
            Inativos
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('deleted')}
            selectedItem={selectedItem}
            itemValue="deleted"
          >
            Excluídos
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => setSelectedItem('none')}
            selectedItem={selectedItem}
            itemValue="none"
          >
            Sem filtro
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
