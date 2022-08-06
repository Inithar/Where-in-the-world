import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from './layouts/MainTemplate';
import { Countries } from './pages/countries/Countries';
import { CountriesDataProvider } from './providers/CountriesDataProvider';
import GlobalStyle from './styles/global-styles';
import { darkTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <CountriesDataProvider>
        <Routes>
          <Route path="/" element={<MainTemplate />}>
            <Route index element={<Countries />} />
          </Route>
        </Routes>
      </CountriesDataProvider>
    </ThemeProvider>
  );
}

export default App;
