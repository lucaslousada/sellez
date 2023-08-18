import { useContext, useState } from 'react'
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'
import { ProductsContext } from '../../../../../contexts/ProcuctsContext'

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuTriggerContent,
} from './styles'

export type StatusFilterItemType = keyof typeof statusFilterItems | null

const statusFilterItems = {
  active: 'Produtos ativos',
  inactivated: 'Produtos inativos',
  deleted: 'Produtos excluídos',
}

export function Status(): JSX.Element {
  const { activeQueryParameters, changeActiveQueryParameters } =
    useContext(ProductsContext)

  const [activeStatusFilter, setActiveStatusFilter] =
    useState<StatusFilterItemType>(activeQueryParameters.status)

  function changeStatusFilter(filterValue: StatusFilterItemType): void {
    setActiveStatusFilter(filterValue)

    changeActiveQueryParameters({
      ...activeQueryParameters,
      status: filterValue,
    })
  }

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger title="Situação">
        <DropdownMenuTriggerContent selectedItem={activeStatusFilter}>
          {activeStatusFilter !== null
            ? statusFilterItems[activeStatusFilter]
            : 'Por situação'}
        </DropdownMenuTriggerContent>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Situação</DropdownMenuLabel>

        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem
            value="active"
            onSelect={() => {
              changeStatusFilter('active')
            }}
          >
            Ativos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="inactivated"
            onSelect={() => {
              changeStatusFilter('inactivated')
            }}
          >
            Inativos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="deleted"
            onSelect={() => {
              changeStatusFilter('deleted')
            }}
          >
            Excluídos
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="null"
            onSelect={() => {
              changeStatusFilter(null)
            }}
          >
            Sem filtro
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
}
