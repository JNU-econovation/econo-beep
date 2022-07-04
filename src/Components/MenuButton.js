import React from 'react';
import styled from 'styled-components';
import { BiMenuAltLeft, BiX } from 'react-icons/bi';

function MenuButton({ isToggled, onClick }) {
  return (
    <Box isToggled={isToggled} onClick={onClick}>
      {!isToggled ? (<BiMenuAltLeft />) : (<BiX />)}
    </Box>
  );
}

const Box = styled.button`
  display: none;
  font-size: 2rem;
  padding: 0.2rem 0.2rem;
  background-color: ${(props) => props.theme.bgColor};
  border: none;
  color: ${(props) => props.theme.blue};
  
  @media screen and (max-width: 767px) {
    display: block;
}
`;

export default MenuButton;
