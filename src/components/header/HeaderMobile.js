import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import OpenMenuButton from './OpenMenuButton';
import ProfileButton from './ProfileButton';
import { useNavigate } from 'react-router-dom';

function HeaderMobile() {
  const navigate = useNavigate();

  const [isToggled, setIsToggled] = useState(false);

  const onClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <HeaderHolder>
      <Box>
        <OpenMenuButton isToggled={isToggled} onClick={onClick} />
        <ProfileButton isToggled={isToggled} />
      </Box>

      <MenuButtonsHolder isToggled={isToggled}>
        <MenuButton onClick={() => navigate('/search/books')}>도서</MenuButton>
        <MenuButton onClick={() => navigate('/search/equipments')}>기자재</MenuButton>
        <MenuButton onClick={() => navigate('/manager')}>관리자</MenuButton>
      </MenuButtonsHolder>
    </HeaderHolder>
  );
}

const HeaderHolder = styled.div`
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
  width: 100vw;
  padding: 2.7vh 3vw 0.3vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;

const menuAnimation = keyframes`
  from {
    transform: translateY(-30vh);
  }
  to {
    transfrom: translateY(0vh)
  }
`;

const MenuButtonsHolder = styled.div`
  width: 100vw;
  border-top: ${(props) => props.theme.borderTop};
  box-shadow: ${(props) => props.theme.boxShadow};

  display: ${(props) => props.isToggled ? 'block' : 'none'};

  animation: ${menuAnimation} 500ms ease-in-out;
`;

const MenuButton = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  border-bottom: ${(props) => props.theme.borderTop};
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.1rem;
  font-weight: 300;
  color: ${(props) => props.theme.firstGray};

`;

export default HeaderMobile;
