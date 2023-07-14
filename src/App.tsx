import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Products } from './pages/Products';

import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route path="/" element={<Navigate replace to="produtos" />} />

        <Route path="produtos" element={<Products />} />
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  );
}
