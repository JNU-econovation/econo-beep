import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Profile from './Profile';
import Menu from './Menu';

function HeaderPc() {
  return (
    <MenuBar>
      <Box>
        <Logo />
        <Menu />
      </Box>
      <Profile />
    </MenuBar>
  );
}

const MenuBar = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    padding: 0.5rem 1.5rem;

    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const Box = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderPc;
