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
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem;
  margin-left: 0.5rem;
  border: none;
  
  font-size: 2rem;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
`;

export default OpenMenuButton;
