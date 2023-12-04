import React from 'react';
import { StyledNavLink, Container, StyledItem } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Container>
        <StyledItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </StyledItem>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </Container>
    </>
  );
};
