import React from 'react';
import styled from 'styled-components';
import HeaderMobile from './HeaderMobile';
import HeaderPc from './HeaderPc';

function Header() {
  return (
    <Box>
      <HeaderMobile />
      <HeaderPc />
    </Box>
  );
}

const Box = styled.div`
  top: 0;
  width: 100vh;
  z-index: 2;
  
  position: fixed;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
`;

export default Header;
