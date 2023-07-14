import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 0 10px;
  color: ${({ theme }) => theme.colors.color_800};
  font-size: 14px;

  li {
    display: flex;
    align-items: center;
    gap: 0 10px;
  }

  li:last-of-type {
    color: ${({ theme }) => theme.colors.color_900};
  }

  svg {
    width: 14px;
    height: 14px;
    color: ${({ theme }) => theme.colors.color_800};
  }
`;

export const BackToPreviousPage = styled.button`
  display: flex;
  align-items: center;
  gap: 0 5px;
  padding: 5px 6px;
  background-color: ${({ theme }) => theme.colors.transparent_color_200};
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.color_900};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 5px;
  transition: background-color ${({ theme }) => theme.transitions.default};

  svg {
    color: ${({ theme }) => theme.colors.main};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent_color_100};
  }
`;

export const LinkHomePage = styled.li`
  transition: color ${({ theme }) => theme.transitions.default};

  a {
    line-height: 0;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &:hover a svg {
    color: ${({ theme }) => theme.colors.color_900};
  }
`;
