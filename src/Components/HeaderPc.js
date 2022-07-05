import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import Logo from './Logo';
import Profile from './Profile';
import Menu from './Menu';

function HeaderPc() {
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <MenuBar isToggled={isToggled}>
      <MenuButton isToggled={isToggled} onClick={onClick} />
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
    padding: 0rem 1.5rem;

    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Box = styled.div`
  width: 65vw;
  display: flex;
  justify-content: space-between;
`;

export default HeaderPc;
