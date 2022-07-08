import React from 'react';
import styled from 'styled-components';
import HeaderMobile from './HeaderMobile';
import HeaderPc from './HeaderPc';

function Header() {
  return (
    <Box>
      {/* 어떻게 컴퓨터, 모바일을 감지하는건지..? */}
      <HeaderMobile />
      <HeaderPc />
    </Box>
  );
}

const Box = styled.div`
  top: 0;
  width: 100vh;
  margin: 1rem auto;
  
  position: fixed;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
`;

export default Header;
