import styled from 'styled-components';
import { Trigger, Root, List } from '@radix-ui/react-tabs';

interface ContainerTabsContentProps {
  isTheTabVisible: string;
}

export const TabsRoot = styled(Root)`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
`;

export const TabsList = styled(List)`
  z-index: 1;
  overflow: auto;
  width: min-content;
  padding: 30px 15px 20px;

  background-color: ${({ theme }) => theme.colors.color_100};
`;

export const Logo = styled.div`
  display: flex;
  padding: 5px;
  margin-bottom: 25px;
  border: 1px solid ${({ theme }) => theme.colors.color_400};
  border-radius: 5px;

  > svg {
    width: 32px;
    height: 32px;
  }
`;

export const TabsTrigger = styled(Trigger)`
  display: flex;
  padding: 7px;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  margin: 0 auto;
  transition: background-color ${({ theme }) => theme.transitions.default};

  > svg {
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.color_400};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  & + button {
    margin-top: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.color_400};

    > svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }

  &[data-state='active'] {
    background-color: ${({ theme }) => theme.colors.color_400};

    > svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }
`;

export const ContainerTabsContent = styled.div<ContainerTabsContentProps>`
  display: ${({ isTheTabVisible }) =>
    isTheTabVisible === 'displayOff' ? 'none' : 'initial'};
  width: 250px;
  padding: 40px 15px 20px;
  background-color: ${({ theme }) => theme.colors.color_200};
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  > h2 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.color_700};
    text-transform: capitalize;
  }
`;

export const MinimizeMenuButton = styled.button`
  display: flex;
  padding: 5px;
  border-radius: 3px;
  background-color: transparent;
  border: none;
  transition: background-color ${({ theme }) => theme.transitions.default};

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.colors.color_700};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_200};

    svg {
      color: ${({ theme }) => theme.colors.color_900};
    }
  }
`;

export const LinkList = styled.ul`
  font-size: 15px;
  font-weight: 500;

  li a {
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 8px 10px;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.color_700};
    transition: color ${({ theme }) => theme.transitions.default},
      background-color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.color_900};
      background-color: ${({ theme }) => theme.colors.transparent_color_200};
    }

    svg {
      min-width: 24px;
      min-height: 24px;
    }

    p {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const ListItem = styled.li`
  & + li {
    margin-top: 5px;
  }
`;
