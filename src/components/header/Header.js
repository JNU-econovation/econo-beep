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
  width: 100vh;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
`;

export default Header;
