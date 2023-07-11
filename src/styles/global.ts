import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* *:focus{
    outline: 0.125rem solid #5865f2;
  } */

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${({ theme }) => theme.colors.color_400};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font-family: 'Inter', sans-serif;
    color: ${({ theme }) => theme.colors.color_900};
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
