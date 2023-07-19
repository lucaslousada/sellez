import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 540px;
  padding: 7px 16px;
  background-color: ${({ theme }) => theme.colors.color_200};
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  border-radius: 5px;

  input {
    flex: 1;
    background-color: transparent;
    font-size: 16px;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.color_700};
    }
  }

  > svg {
    width: 17px;
    height: 17px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.color_800};
  }
`;

export const MultipleFilters = styled.ul`
  display: flex;
  gap: 0 10px;
  margin-top: 10px;
`;
