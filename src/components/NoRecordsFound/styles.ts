import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.313rem 0;
  text-align: center;
  height: 100%;

  h3 {
    font-size: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.colors.color_800};
  }
`
