import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from './layouts/MainTemplate';
import { Countries } from './pages/countries/Countries';
import { Country } from './pages/country/Country';
import { NotFound } from './pages/not-found/NotFound';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyle from './styles/global-styles';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
  const theme = useAppSelector(({ theme }) => theme.theme);

  return (
    <ThemeProvider theme={theme === 'dark theme' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="countries" element={<MainTemplate />}>
          <Route index element={<Countries />} />
          <Route path=":country" element={<Country />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
