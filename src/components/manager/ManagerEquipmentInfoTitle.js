import React from 'react';
import styled from 'styled-components';
import InfoTitle from './ManagerInfoTitle';

function ManagerEquipmentInfoTitle() {
  return (
    <InfoTitle>
      <TitleBox>제목</TitleBox>
      <TypeBox>분야</TypeBox>
      <NoteBox>비고</NoteBox>
    </InfoTitle>
  );
}

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
