import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  width: 100%;
  padding: 40px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.color_900};
  }
`;
