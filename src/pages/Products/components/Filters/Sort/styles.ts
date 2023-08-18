import styled from 'styled-components'
import { type SortFilterItemType } from '.'

import {
  buttonContentForFilters,
  buttonForFilters,
  content,
  group,
  label,
} from '../../../../../styles/shared/dropdownMenuForFilters'

import {
  Content,
  RadioGroup,
  RadioItem,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

interface DropdownMenuTriggerContentProps {
  selectedItem: SortFilterItemType
}

interface DropdownMenuRadioItemProps {
  value: SortFilterItemType
}

export const DropdownMenuTrigger = styled(Trigger)`
  ${buttonForFilters}
`

export const DropdownMenuTriggerContent = styled.div<DropdownMenuTriggerContentProps>`
  ${buttonContentForFilters}

  &, svg {
    color: ${({ theme, selectedItem }) =>
      selectedItem !== 'created_at'
        ? theme.colors.main
        : theme.colors.color_900};
  }
`

export const DropdownMenuContent = styled(Content)`
  ${content}
`

export const DropdownMenuLabel = styled(Label)`
  ${label}
`

export const DropdownMenuRadioGroup = styled(RadioGroup)`
  ${group}
`

export const DropdownMenuRadioItem = styled(
  RadioItem,
)<DropdownMenuRadioItemProps>`
  ${buttonForFilters}

  &[data-state='checked'] {
    color: ${({ theme }) => theme.colors.main};
  }
`
