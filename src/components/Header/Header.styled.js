import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  padding: 20px;

  color: black;
  background-color: burlywood;
  text-decoration: none;
  width: 100%;
  &:active {
    color: red;
  }
`;
export const StyledItem = styled.li`
  color: white;
`;
export const Container = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;
export const Div = styled.div``;
