import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from './layouts/MainTemplate';
import { Home } from './pages/home/Home';
import GlobalStyle from './styles/global-styles';
import { darkTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
