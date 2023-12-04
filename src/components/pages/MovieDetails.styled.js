import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Button = styled.button`
  padding: 10px 30px;
  color: black;
  margin-bottom: 20px;
  background-color: DarkGrey;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;
export const Container = styled.div`
  display: flex;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;
export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &:active {
    color: white;
    background-color: #787878;
  }
`;
