import styled from 'styled-components';
import { Root, Content, List, Trigger } from '@radix-ui/react-tabs';

export const TabsRoot = styled(Root)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TabsList = styled(List)`
  display: flex;
  gap: 0 16px;
  margin-top: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
`;

export const TabsTrigger = styled(Trigger)`
  position: relative;
  padding: 10px 20px;
  background-color: transparent;
  text-align: center;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.color_800};
  border: none;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.main};
  }

  &[data-state='active'] {
    color: ${({ theme }) => theme.colors.color_900};

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      right: 0;
      left: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.color_900};
    }
  }
`;

export const TabsContent = styled(Content)`
  padding-top: 20px;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;
