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
    position: fixed;
    top: 0;
    width: 100%;
    margin: 1rem auto;
    padding: 0rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.bgColor};
    
    flex-wrap: wrap;
  }
`;

export default HeaderMobile;
