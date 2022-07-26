import React from 'react';
import styled from 'styled-components';

function ManagerEquipmentInfoTitle() {
  return (
    <InfoTitle>
      <TitleBox>제목</TitleBox>
      <TypeBox>분야</TypeBox>
      <NoteBox>비고</NoteBox>
    </InfoTitle>
  );
}

const InfoTitle = styled.div`
  width: 80%;
  height: 4vh;
  
  display: flex;
  align-items: center;
  
  margin: 0 0 2% 0;
  
  border-radius: 15px;
  color: ${(props) => props.theme.black};
  font-size: 0.8rem;
  
  background-color: ${(props) => props.theme.managerGray};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
`;

const TitleBox = styled.div`
  width: 50%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeBox = styled.div`
  width: 25%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteBox = styled.div`
  width: 25%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ManagerEquipmentInfoTitle;
