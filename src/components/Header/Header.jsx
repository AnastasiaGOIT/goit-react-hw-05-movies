import React from 'react';
import { NavLink } from 'react-router-dom';
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
