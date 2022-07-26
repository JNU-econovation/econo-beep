import React from 'react';
import styled from 'styled-components';

function ManagerBookForm({correctData}) {
  return (
    <Form>
      <InputImg >
        <input type="file" placeholder="이미지" id="thumbnailImg" />
      </InputImg>
      <InputTitle placeholder="제목" id="title" />
      <InputAuthor placeholder="저자" id="authorName" />
      <InputPublisher placeholder="출판사" id="publisherName" />
      <InputPublishDate placeholder="출판일" id="publishDate" />
      <InputNote placeholder="비고" id="note" />
      {correctData ? (
        <InputButton>수정</InputButton>
      ) : <InputButton>추가</InputButton>}
    </Form>
  );
}

const Form = styled.form`
  width: 100%;
  height: 5vh;
  
  margin: 0.25% 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 10px;
  border: none;

  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.managerBoxShadow};

  color: ${(props) => props.theme.firstGray};
  font-size: 0.8rem;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const InputImg = styled.div`
  width: 20%;
  height: 100%;
  
  padding-left: 5%;

  border: none;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputTitle = styled.input`
  width: 20%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputAuthor = styled.input`
  width: 20%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputPublisher = styled.input`
  width: 20%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputPublishDate = styled.input`
  width: 20%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputNote = styled.input`
  width: 20%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputButton = styled.button`
  width: 10%;
  height: 80%;

  text-align: center;

  margin: 0 1vw;
  padding: 0;

  border: none;
  border-radius: 20px;

  font-size: 1rem;
  font-weight: 600;

  color: ${ props => props.state === true ? "#FDFDFD" : "#001AFF"};
  background-color: ${ props => props.state === true ? "#001AFF" : "#CACFFF"};
`;

export default ManagerBookForm;
