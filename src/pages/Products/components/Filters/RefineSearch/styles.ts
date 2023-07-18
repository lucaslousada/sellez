import styled from 'styled-components';

import {
  Content,
  Group,
  Item,
  Label,
  Trigger,
} from '@radix-ui/react-dropdown-menu';

export const DropdownMenuTrigger = styled(Trigger)`
  display: flex;
  padding: 6.5px;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.colors.color_400};
  border: none;
  border-radius: 15px;
  transition: background-color ${({ theme }) => theme.transitions.default};

  span {
    padding: 0 4px;
    font-size: 14px;
  }

  svg {
    width: 17px;
    height: 17px;
    color: ${({ theme }) => theme.colors.color_800};
  }

  &:hover,
  &[data-state='open'] {
    background-color: ${({ theme }) => theme.colors.color_600};
  }
`;

export const DropdownMenuContent = styled(Content)`
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

export const DropdownMenuItem = styled(Item)`
  padding: 6px 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.color_900};
  outline: none;
  cursor: pointer;
  transition: color ${({ theme }) => theme.transitions.default};

  &[data-highlighted] {
    color: ${({ theme }) => theme.colors.main};
  }
`;
