import React from 'react';
import styled from 'styled-components';
import { BiMenuAltLeft, BiX } from 'react-icons/bi';

function OpenMenuButton({ isToggled, onClick }) {
  return (
    <Box isToggled={isToggled} onClick={onClick}>
      {!isToggled ? (<BiMenuAltLeft />) : (<BiX />)}
    </Box>
  );
}

const Box = styled.button`
  display: none;
  padding: 0.2rem 0.2rem;
  border: none;
  
  font-size: 2rem;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
  
  @media screen and (max-width: 767px) {
    display: block;
}
`;

export default OpenMenuButton;
