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
  RadioGroup,
  RadioItem,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

interface DropdownMenuTriggerProps {
  selectedItem: SelectableItemTypes;
}

export const DropdownMenuTrigger = styled(Trigger)<DropdownMenuTriggerProps>`
  ${buttonForFilters}

  color: ${({ theme, selectedItem }) =>
    selectedItem !== 'none' ? theme.colors.main : theme.colors.color_900};
`;

export const DropdownMenuContent = styled(Content)`
  ${content}
`;

export const DropdownMenuLabel = styled(Label)`
  ${label}
`;

export const DropdownMenuRadioGroup = styled(RadioGroup)`
  ${group}
`;

export const DropdownMenuRadioItem = styled(RadioItem)`
  ${buttonForFilters}

  &[data-state='checked'] {
    color: ${({ theme }) => theme.colors.main};
  }
`;
