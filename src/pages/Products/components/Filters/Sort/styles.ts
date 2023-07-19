import styled from 'styled-components';

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

export const DropdownMenuItem = styled(Item)`
  ${buttonForFilters}
`;
