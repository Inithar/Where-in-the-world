import { Dispatch } from 'react';
import { Wrapper, Slogan, ThemeButton, Icon, Container } from './Header.styles';

interface IHeaderProps {
  currentTheme: string;
  setCurrentTheme: Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ currentTheme, setCurrentTheme }: IHeaderProps) => {
  const handleThemeChange = () => {
    currentTheme === 'darkTheme' ? setCurrentTheme('lightTheme') : setCurrentTheme('darkTheme');
  };

  return (
    <Wrapper>
      <Container>
        <Slogan>Where in the world?</Slogan>
        <ThemeButton onClick={handleThemeChange}>
          <Icon />
          Dark Mode
        </ThemeButton>
      </Container>
    </Wrapper>
  );
};
