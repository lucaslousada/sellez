import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.transparent_color_100};
  text-align: left;

  th {
    padding: 17.5px 0;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.color_800};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.transparent_color_100};
  }

  td {
    padding: 16.5px 0;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.color_900};
    border-bottom: 1px solid
      ${({ theme }) => theme.colors.transparent_color_100};
  }

  tr td:first-of-type,
  tr th:first-of-type {
    padding-left: 20px;
  }

  tr td:last-of-type,
  tr th:last-of-type {
    padding-right: 20px;
  }

  tr:last-of-type td {
    border: none;
  }
`;
