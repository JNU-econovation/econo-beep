import React, { useState } from 'react';
import styled from 'styled-components';
import { BiMenuAltLeft, BiX, BiUserCircle } from 'react-icons/bi';

function Header() {
  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Menubar isToggled={isToggled}>
      {/* 메뉴 버튼 */}
      <button type="button" className="toggle" onClick={onClick}>
        {!isToggled ? (<BiMenuAltLeft />) : (<BiX />)}
      </button>
      {/* 에코노삡 로고 */}
      <div className="logo">
        <h2>econoBeep</h2>
      </div>
      {/* 유저 프로필 for mobile */}
      <div className="profile profile__mobile">
        {!isToggled ? <BiUserCircle /> : <div className="no__profile" /> }
      </div>
      {/* 메뉴 리스트 */}
      <ul className="menu_list">
        <li>도서</li>
        <li>기자재</li>
        <li>관리자</li>
      </ul>
      {/* 유저 프로필 for pc */}
      <div className="profile profile__pc">
        <BiUserCircle />
      </div>
    </Menubar>
  );
}

const Menubar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 1280px;
  margin: 1rem auto;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
  
  .logo{
    margin: 0 1rem;
    font-size: 1.5rem;
  }
  
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

  .toggle {
    display: none;
    font-size: 2rem;
    padding: 0.2rem 0.2rem;
    background-color: ${(props) => props.theme.bgColor};
    border: none;
    color: ${(props) => props.theme.blue};
  }

  .profile {
    display: block;
    font-size: 2rem;
    padding: 0.2rem 0.2rem;
  }
  
  .profile__mobile {
    display: none;
  }
  
  .no__profile {
    width: 32px;
    height: 32px;
  }

  @media screen and (max-width: 767px) {
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

    .toggle {
      display: block;
    }

    .profile {
      display: block;
    }
    
    .profile__pc {
      display: none;
    }
  }
`;

export default Header;
