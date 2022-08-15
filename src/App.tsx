import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from './layouts/MainTemplate';
import { Countries } from './pages/countries/Countries';
import { Country } from './pages/country/Country';
import { NotFound } from './pages/not-found/NotFound';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/global-styles';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState('darkTheme');

  return (
    <ThemeProvider theme={currentTheme === 'darkTheme' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="countries" element={<MainTemplate currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />}>
          <Route index element={<Countries />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
