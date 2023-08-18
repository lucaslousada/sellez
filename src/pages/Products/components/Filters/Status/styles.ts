import styled from 'styled-components'
import { type StatusFilterItemType } from '.'

import {
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
  selectedItem: StatusFilterItemType
}

interface DropdownMenuRadioItemProps {
  value: StatusFilterItemType | 'null'
}

export const DropdownMenuTrigger = styled(Trigger)`
  ${buttonForFilters}
`

export const DropdownMenuTriggerContent = styled.div<DropdownMenuTriggerContentProps>`
  color: ${({ theme, selectedItem }) =>
    selectedItem !== 'active' ? theme.colors.main : theme.colors.color_900};
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
