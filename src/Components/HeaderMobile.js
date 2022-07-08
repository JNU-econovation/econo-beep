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
  // Header 파일인데, 컴포넌트 이름은 또 MenuBar. 명명이 뭔가 이상함.
  //  <MenuBar isToggled={isToggled}>
    <HeaderHolder isToggled={isToggled}>
      {/* MenuButton? 메유인 버튼? 메뉴를 위한 버튼? */}
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
    padding: 0rem 0.5rem;
    
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export default HeaderMobile;
