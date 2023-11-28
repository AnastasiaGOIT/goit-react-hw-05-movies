import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Page } from './Header.styled';

export const Header = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </>
  );
};
