import React, { useContext } from 'react';
import { CurrentTheme } from '../../providers/CurrentThemeProvider';
import { Wrapper, Slogan, ThemeButton, Icon, Container } from './Header.styles';

export const Header = () => {
  const { handleThemeChange } = useContext(CurrentTheme);

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
