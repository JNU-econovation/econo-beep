import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import Logo from './Logo';
import Profile from './Profile';

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
      {/* 메뉴 리스트 */}
      <ul className="menu_list">
        <li>도서</li>
        <li>기자재</li>
        <li>관리자</li>
      </ul>
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
    max-width: 1280px;
    margin: 1rem auto;
    padding: 0rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.blue};
    background-color: ${(props) => props.theme.bgColor};

    .menu_list {
      list-style: none;
      display: flex;
      margin: 1rem 1rem 1rem 15rem;
    }

    li {
      padding: 0 1rem;
      color: ${(props) => props.theme.black};
      opacity: ${(props) => props.theme.secondaryOpacity};
    }
    

    flex-wrap: wrap;

    .menu_list {
      display: ${(props) => (props.isToggled ? 'flex' : 'none')};
      flex-direction: column;
      width: 100%;
      align-items: center;
      margin: 0 1rem;
    }

    .menu_list li {
      margin: 1rem 1rem;
      padding: 0;
    }
  }
`;

export default HeaderMobile;
