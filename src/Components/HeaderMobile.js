import React, { useState } from 'react';
import styled from 'styled-components';
import OpenMenuButton from './OpenMenuButton';
import Logo from './Logo';
import Profile from './Profile';
import Menu from './Menu';

function HeaderMobile() {
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <HeaderHolder isToggled={isToggled}>
      <OpenMenuButton isToggled={isToggled} onClick={onClick} />
      <Logo />
      <Profile />
      <Menu isToggled={isToggled} />
    </HeaderHolder>
  );
}

const HeaderHolder = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem 0;
    
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HeaderMobile;
