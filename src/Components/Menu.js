import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Menu({ isToggled }) {
  return (
    <MenuButtonsHolder isToggled={isToggled}>
      <StyledButton component={Link} to="/books" variant="text" color="info">도서</StyledButton>
      <StyledButton component={Link} to="/equipment" variant="text" color="info">기자재</StyledButton>
      <StyledButton component={Link} to="/manager" variant="text" color="info">관리자</StyledButton>
    </MenuButtonsHolder>
  );
}

const menuAnimation = keyframes`
  from {
    transform: translateY(-30vh);
  }
  to {
    transfrom: translateY(0vh)
  }
`;

const MenuButtonsHolder = styled.ul`
  list-style: none;
  display: flex;
  width: 50vw;
  
  background-color: ${(props) => props.theme.bgColor};
  
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    margin: 0;
    padding: 0 1rem;

    border-top: ${(props) => props.theme.borderTop};    
    box-shadow: ${(props) => props.theme.boxShadow};
    
    ${(props) => props.isToggled
      && css`
      animation: ${menuAnimation} 500ms ease-in-out;
    `}
  }
  
`;

const StyledButton = styled(Button)`
  && {
    padding: 0 5vw;
    font-size: 1rem;

    @media screen and (max-width: 767px) {
      margin: 1rem;
      padding: 0;
    }
    
    &:hover{
      background-color: ${(props) => props.theme.bgColor};
    }
  }
  
`;

export default Menu;
