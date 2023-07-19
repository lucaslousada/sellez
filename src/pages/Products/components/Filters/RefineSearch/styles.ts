import styled from 'styled-components';
import { SelectableItemTypes } from '.';

import {
  Content,
  Group,
  Item,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

interface DropdownMenuTriggerProps {
  selectedItem: SelectableItemTypes;
}

interface DropdownMenuItemProps {
  selectedItem: SelectableItemTypes;
  itemValue: SelectableItemTypes;
}

export const DropdownMenuTrigger = styled(Trigger)<DropdownMenuTriggerProps>`
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
    color: ${({ theme, selectedItem }) =>
      selectedItem !== 'none' ? theme.colors.main : theme.colors.color_900};
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
`;

export const DropdownMenuContent = styled(Content)`
  z-index: 1;
  padding: 6px 8px;
  margin: 4px;
  background-color: ${({ theme }) => theme.colors.color_300};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 5px;
`;

export const DropdownMenuLabel = styled(Label)`
  padding: 6px 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.color_700};
`;

export const DropdownMenuGroup = styled(Group)`
  display: flex;
  flex-direction: column;
  gap: 2px 0;
`;

export const DropdownMenuItem = styled(Item)<DropdownMenuItemProps>`
  padding: 6px 8px;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.default};

  color: ${({ theme, itemValue, selectedItem }) =>
    itemValue === selectedItem ? theme.colors.main : theme.colors.color_900};

  &[data-highlighted] {
    color: ${({ theme }) => theme.colors.main};
  }
`;
