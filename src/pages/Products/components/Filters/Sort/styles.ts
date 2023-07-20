import styled from 'styled-components';

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

export const DropdownMenuTrigger = styled(Trigger)`
  ${buttonForFilters}
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
