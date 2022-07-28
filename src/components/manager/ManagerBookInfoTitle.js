import React from 'react';
import styled from 'styled-components';
import InfoTitle from './ManagerInfoTitle';

function ManagerBookInfoTitle() {
  return (
    <InfoTitle>
      <TitleBox>제목</TitleBox>
      <AuthorNameBox>저자</AuthorNameBox>
      <PublisherNameBox>출판사</PublisherNameBox>
      <PublishDayBox>출판일</PublishDayBox>
      <TypeBox>분야</TypeBox>
      <NoteBox>비고</NoteBox>
    </InfoTitle>
  );
}

const TitleBox = styled.div`
  width: 31.25%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthorNameBox = styled.div`
  width: 18.75%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublisherNameBox = styled.div`
  width: 18.75%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublishDayBox = styled.div`
  width: 9.375%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeBox = styled.div`
  width: 9.375%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteBox = styled.div`
  width: 12%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default ManagerBookInfoTitle;
