import { useContext, useEffect, useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';
import { ProductsContext } from '../../../../../contexts/ProcuctsContext';

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles';

export type StatusFilterItemType = keyof typeof statusFilterItems;

const statusFilterItems = {
  active: 'Produtos ativos',
  inactivated: 'Produtos inativos',
  deleted: 'Produtos excluídos',
  all: 'Por situação',
};

export function Status() {
  const { activeFilters, changeActiveFilters } = useContext(ProductsContext);

  const [activeStatusFilter, setActiveStatusFilter] =
    useState<StatusFilterItemType>(activeFilters.status);

  useEffect(() => {
    changeActiveFilters({ ...activeFilters, status: activeStatusFilter });
  }, [activeStatusFilter]);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger selectedItem={activeStatusFilter} title="Situação">
        {statusFilterItems[activeStatusFilter]}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Situação</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={activeStatusFilter}
          onValueChange={setActiveStatusFilter as (value: string) => void}
        >
          <DropdownMenuRadioItem value="active">Ativos</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="inactivated">
            Inativos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="deleted">
            Excluídos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="all">Sem filtro</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
