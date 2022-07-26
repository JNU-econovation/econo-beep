import React from 'react';
import styled from 'styled-components';

function ManagerBookInfoTitle() {
  return (
    <InfoTitle>
      <TitleBox>제목</TitleBox>
      <AuthorBox>저자</AuthorBox>
      <PublisherBox>출판사</PublisherBox>
      <PublishDayBox>출판일</PublishDayBox>
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
  width: 31.25%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthorBox = styled.div`
  width: 18.75%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublisherBox = styled.div`
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
