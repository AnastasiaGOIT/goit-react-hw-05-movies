import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 20px;
  color: black;
  text-decoration: none;
  &:active {
    color: red;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;
