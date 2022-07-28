import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import ProfileButton from './ProfileButton';

function HeaderPc() {
  const navigate = useNavigate();

  return (
    <MenuBar>
      <Logo />
      <Box>
        <MenuButtonsHolder>
          <MenuButton onClick={() => navigate('/search/books')}>도서</MenuButton>
          <MenuButton onClick={() => navigate('/search/equipments')}>기자재</MenuButton>
          <MenuButton onClick={() => navigate('/manager')}>관리자</MenuButton>
        </MenuButtonsHolder>
        <ProfileButton />
      </Box>
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

    // position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${(props) => props.theme.bgColor};
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

const Box = styled.div`
  width: 30vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuButtonsHolder = styled.div`
  width: 80%;
  display: flex;
`;

const MenuButton = styled.div`
  width: 30%;
  padding: 0.8rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.9rem;
  font-weight: 300;
  color: ${(props) => props.theme.firstGray};

`;

export default HeaderPc;
