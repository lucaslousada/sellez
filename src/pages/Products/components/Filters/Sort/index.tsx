import { useContext, useEffect, useState } from 'react';
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu';
import { ProductsContext } from '../../../../../contexts/ProcuctsContext';

import { SortAscending } from 'phosphor-react';

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles';

export type SortFilterItemType = keyof typeof sortFilterItems;

const sortFilterItems = {
  name: 'Nome',
  most_recent: 'Mais recente',
  update_date: 'Data de atualização',
  sku: 'SKU',
};

export function Sort() {
  const { activeFilters, changeActiveFilters } = useContext(ProductsContext);

  const [activeSortFilter, setActiveSortFilter] = useState<SortFilterItemType>(
    activeFilters.sort
  );

  useEffect(() => {
    changeActiveFilters({ ...activeFilters, sort: activeSortFilter });
  }, [activeSortFilter]);

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger title="Ordenação">
        <SortAscending />
        {sortFilterItems[activeSortFilter]}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Ordernar por</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={activeSortFilter}
          onValueChange={setActiveSortFilter as (value: string) => void}
        >
          <DropdownMenuRadioItem value="name">Nome</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="most_recent">
            Mais recentes
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="update_date">
            Data de atualização
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sku">Código SKU</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  );
}
