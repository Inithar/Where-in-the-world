import React, { useState } from 'react';
import { Wrapper, Slogan, ThemeButton, Icon, Container } from './Header.styles';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Slogan>Where in the world?</Slogan>
        <ThemeButton>
          <Icon />
          Dark Mode
        </ThemeButton>
      </Container>
    </Wrapper>
  );
};
