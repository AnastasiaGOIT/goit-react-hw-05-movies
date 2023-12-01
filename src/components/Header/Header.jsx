import React from 'react';

import { StyledNavLink, Container } from './Header.styled';
export const Header = () => {
  return (
    <>
      <Container>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </Container>
    </>
  );
};
