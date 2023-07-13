import { ThemeProvider } from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ProductList } from './pages/ProductList';

import { GlobalStyle } from './styles/global';
import { dark } from './styles/themes/dark';

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <Routes>
        <Route path="/" element={<Navigate replace to="produtos/list" />} />

        <Route path="produtos/list" element={<ProductList />} />
      </Routes>

      <GlobalStyle />
    </ThemeProvider>
  );
}
