import styled from 'styled-components';
import { SelectableItemTypes } from '.';

import {
  buttonForFilters,
  content,
  group,
  label,
} from '../../../../../styles/shared/dropdownMenuForFilters';

import {
  Content,
  Group,
  Item,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

interface DropdownMenuItemProps {
  selectedItem: SelectableItemTypes;
  itemValue: SelectableItemTypes;
}

export const DropdownMenuTrigger = styled(Trigger)`
  ${buttonForFilters}
`;

export const DropdownMenuContent = styled(Content)`
  ${content}
`;

export const DropdownMenuLabel = styled(Label)`
  ${label}
`;

export const DropdownMenuGroup = styled(Group)`
  ${group}
`;

export const DropdownMenuItem = styled(Item)<DropdownMenuItemProps>`
  ${buttonForFilters}

  color: ${({ theme, itemValue, selectedItem }) =>
    itemValue === selectedItem ? theme.colors.main : theme.colors.color_900};
`;
