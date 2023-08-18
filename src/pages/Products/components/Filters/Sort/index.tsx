import { useContext, useState } from 'react'
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
import { ProductsContext } from '../../../../../contexts/ProcuctsContext'

import { SortAscending } from 'phosphor-react'

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuTriggerContent,
} from './styles'

export type SortFilterItemType = keyof typeof sortFilterItems

const sortFilterItems = {
  name: 'Nome',
  created_at: 'Mais recente',
  update_date: 'Data de atualização',
  sku: 'SKU',
}

export function Sort(): JSX.Element {
  const { activeQueryParameters, changeActiveQueryParameters } =
    useContext(ProductsContext)

  const [activeSortFilter, setActiveSortFilter] = useState<SortFilterItemType>(
    activeQueryParameters._sort,
  )

  function changeSortFilter(filterValue: SortFilterItemType): void {
    setActiveSortFilter(filterValue)

    changeActiveQueryParameters({
      ...activeQueryParameters,
      _sort: filterValue,
    })
  }

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger title="Ordenação">
        <DropdownMenuTriggerContent selectedItem={activeSortFilter}>
          <SortAscending />
          {sortFilterItems[activeSortFilter]}
        </DropdownMenuTriggerContent>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Ordernar por</DropdownMenuLabel>

        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem
            value="name"
            onSelect={() => {
              changeSortFilter('name')
            }}
          >
            Nome
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="created_at"
            onSelect={() => {
              changeSortFilter('created_at')
            }}
          >
            Mais recentes
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="update_date"
            onSelect={() => {
              changeSortFilter('update_date')
            }}
          >
            Data de atualização
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="sku"
            onSelect={() => {
              changeSortFilter('sku')
            }}
          >
            Código SKU
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
}
