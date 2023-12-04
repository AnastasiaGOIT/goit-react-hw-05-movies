import React from 'react';

import { StyledNavLink, Container, StyledItem, Div } from './Header.styled';
export const Header = () => {
  return (
    <Div>
      <Container>
        <StyledItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledItem>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </Container>
    </Div>
  );
};
