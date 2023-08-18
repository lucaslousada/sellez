import styled from 'styled-components'

import {
  Content,
  RadioGroup,
  RadioItem,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

export const DropdownMenuTrigger = styled(Trigger)`
  display: flex;
  padding: 6.5px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.color_400};
  border: none;
  border-radius: 15px;
  text-transform: lowercase;
  transition: box-shadow ${({ theme }) => theme.transitions.default};

  span {
    padding: 0 4px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.main};
  }

  svg {
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.color_800};
  }

  &:hover,
  &[data-state='open'] {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.main};
  }
`

export const DropdownMenuContent = styled(Content)`
  z-index: 1;
  padding: 6px 8px;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.color_300};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 5px;
`

export const DropdownMenuLabel = styled(Label)`
  padding: 6px 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_700};
`

export const DropdownMenuRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`

export const DropdownMenuRadioItem = styled(RadioItem)`
  padding: 6px 8px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default};
  color: ${({ theme }) => theme.colors.color_900};
  border-radius: 5px;
  outline: none;

  &[data-state='checked'] {
    color: ${({ theme }) => theme.colors.main};
  }

  &[data-highlighted],
  &:focus {
    background-color: ${({ theme }) => theme.colors.color_400};
  }
`
