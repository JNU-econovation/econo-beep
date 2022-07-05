import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import Logo from './Logo';
import Profile from './Profile';
import Menu from './Menu';

function HeaderMobile() {
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <MenuBar isToggled={isToggled}>
      <MenuButton isToggled={isToggled} onClick={onClick} />
      <Logo />
      <Profile />
      <Menu isToggled={isToggled} />
    </MenuBar>
  );
}

const MenuBar = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0rem 0.5rem;
    
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HeaderMobile;
