import React from 'react';
import styled from 'styled-components';

function Menu({ isToggled }) {
  const buttonList = ['도서', '기자재', '관리자'];

  const buttons = buttonList.map((button) => <List>{button}</List>);

  return (
    <Box isToggled={isToggled}>{buttons}</Box>
  );
}

const Box = styled.ul`
  list-style: none;
  display: flex;
  width: 50vw;
  
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 1rem;
  }
  
`;

const List = styled.button`
  padding: 0 5vw;
  
  color: ${(props) => props.theme.black};
  opacity: ${(props) => props.theme.secondaryOpacity};
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  font-size: 1rem;
  
  @media screen and (max-width: 767px) {
    margin: 1rem 1rem;
    padding: 0;
  }
  
`;

export default Menu;
