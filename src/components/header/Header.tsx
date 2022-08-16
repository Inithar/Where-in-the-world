import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setTheme } from '../../redux/themeSlice';
import { Wrapper, Slogan, ThemeButton, Icon, Container } from './Header.styles';

export const Header = () => {
  const theme = useAppSelector(({ theme }) => theme.theme);
  const dispatch = useAppDispatch();

  const handleThemeChange = () => {
    theme === 'dark theme' ? dispatch(setTheme('light theme')) : dispatch(setTheme('dark theme'));
  };

  return (
    <Wrapper>
      <Container>
        <Slogan>Where in the world?</Slogan>
        <ThemeButton onClick={handleThemeChange}>
          <Icon currentTheme={theme} />
          Dark Mode
        </ThemeButton>
      </Container>
    </Wrapper>
  );
};
