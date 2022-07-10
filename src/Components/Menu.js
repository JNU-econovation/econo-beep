import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Menu({ isToggled }) {
  return (

    <MenuButtonHolder isToggled={isToggled}>
      <StyledButton component={Link} to="/books" variant="text" color="info">도서</StyledButton>
      <StyledButton component={Link} to="/equipment" variant="text" color="info">기자재</StyledButton>
      <StyledButton component={Link} to="/manager" variant="text" color="info">관리자</StyledButton>
    </MenuButtonHolder>

  );
}

const MenuButtonHolder = styled.ul`
  list-style: none;
  display: flex;
  width: 50vw;
  
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0 1rem;

    border-top: ${(props) => props.theme.borderTop};    
    box-shadow: ${(props) => props.theme.boxShadow};
  }
  
`;

const StyledButton = styled(Button)`
  && {
    padding: 0 5vw;
    
    font-size: 1rem;

    @media screen and (max-width: 767px) {
      margin: 1rem 1rem;
      padding: 0;
    }
  }
  
`;

export default Menu;
