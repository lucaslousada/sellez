import { useState } from 'react'
import { Root as DropdownMenuRoot } from '@radix-ui/react-dropdown-menu'

import { Faders } from 'phosphor-react'

import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './styles'

type SelectableItemTypes = keyof typeof selectableItems

const selectableItems = {
  sku: 'SKU',
  name: 'Nome',
  none: 'Não refinar',
}

export function RefineSearch(): JSX.Element {
  const [selectedItem, setSelectedItem] = useState<SelectableItemTypes>('none')

  return (
    <DropdownMenuRoot>
      <DropdownMenuTrigger>
        {selectedItem !== 'none' ? (
          <span>{selectableItems[selectedItem]}</span>
        ) : (
          <Faders />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Refinar busca</DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={selectedItem}
          onValueChange={setSelectedItem as (value: string) => void}
        >
          <DropdownMenuRadioItem value="name">Nome</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sku">Código SKU</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="none">
            Não refinar
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  )
}
