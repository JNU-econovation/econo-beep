import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

function Menu({ isToggled }) {
  // map을 통해 동적으로 생성하기에는 너무 사소함
  // const buttonList = ['도서', '기자재', '관리자'];

  // const buttons = buttonList.map((button) => <List>{button}</List>);

  return (
    //  Box 명명은 모호함. 정말정말 사소할때만 사용
    <MenuButtonHolder isToggled={isToggled}>
      {/* 호버애니메이션같은 짜잘한 디테일이 필요하고 매번 정의하기 귀찮은 것들은 Mui 라이브러리꺼 사용하기 */}
      {/* color="Info"는 App.js 체크하기 */}
      <Button variant="text" color="info">도서</Button>
      <Button variant="text" color="info">기자재</Button>
      <Button variant="text" color="info">관리자</Button>
    </MenuButtonHolder>
  );
}

const MenuButtonHolder = styled.ul`
  list-style: none;
  display: flex;
  width: 50vw;
  
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.isToggled ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 1rem;
  }
  
`;

// const List = styled.button`
//   padding: 0 5vw;
//
//   ** 색깔 코드로 색을 만들어야지, 검정색에 투명도로 색깔을 만드는 것은 말도 안되는 일.... **
//   맥북 spotlight 에서 color 라고 검색하면 디지털 컬러 측정기.app 있음. 이걸로 원하는 색 뽑아내기 가능
//   사용법 모르겠으면 순찬 질문
//   color: ${(props) => props.theme.black};
//   opacity: ${(props) => props.theme.secondaryOpacity};
//   background-color: ${(props) => props.theme.bgColor};
//   border: none;
//   font-size: 1rem;
//
//   @media screen and (max-width: 767px) {
//     margin: 1rem 1rem;
//     padding: 0;
//   }
//
// `;

export default Menu;
