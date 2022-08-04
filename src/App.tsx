import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/home/Home';
import GlobalStyle from './styles/global-styles';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
