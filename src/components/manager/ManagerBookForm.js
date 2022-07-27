import React, { useState } from 'react';
import styled from 'styled-components';
import { FormControl, MenuItem, Select } from '@mui/material';
import BOOK_TYPE_ICON from '../constant/BOOK_TYPE_ICON';

function ManagerBookForm({ correctData, onCorrectClick }) {
  const [type, setType] = useState(0)

  const onTypeChange = (e) => {
    setType(e.target.value);
  }

  return (
    <Form>
      <InputImg >
        <input type="file" placeholder="이미지" id="thumbnailImg" />
      </InputImg>
      <InputTitle placeholder="제목" id="title" />
      <InputAuthor placeholder="저자" id="authorName" />
      <InputPublisher placeholder="출판사" id="publisherName" />
      <InputPublishDate placeholder="출판일" id="publishDate" />
      <InputType placeholder="타입" id="type">
        <FormControl fullWidth size="small">
          <Select
            labelId="SelectViewMethod"
            id="Select"
            value={type}
            onChange={onTypeChange}
          >
            <MenuItem value={0}>{BOOK_TYPE_ICON.WEB.text}</MenuItem>
            <MenuItem value={1}>{BOOK_TYPE_ICON.APP.text}</MenuItem>
            <MenuItem value={2}>{BOOK_TYPE_ICON.LANGUAGE.text}</MenuItem>
            <MenuItem value={3}>{BOOK_TYPE_ICON.AI.text}</MenuItem>
            <MenuItem value={4}>{BOOK_TYPE_ICON.GAME.text}</MenuItem>
            <MenuItem value={5}>{BOOK_TYPE_ICON.DEVELOPMENT.text}</MenuItem>
            <MenuItem value={6}>{BOOK_TYPE_ICON.MAJOR.text}</MenuItem>
          </Select>
        </FormControl>
      </InputType>
      <InputNote placeholder="비고" id="note" />
      {correctData ? (
        <CorrectBox>
          <InputButton>수정</InputButton>
          <InputButton onClick={onCorrectClick}>취소</InputButton>
        </CorrectBox>
      ) : <AddButton>추가</AddButton>}
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
  
  input {
    :focus {
      border:none
    }
  }
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
  width: 10%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputPublisher = styled.input`
  width: 10%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputPublishDate = styled.input`
  width: 10%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputType = styled.div`
  width: 10%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const InputNote = styled.input`
  width: 10%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;

const AddButton = styled.button`
  width: 10%;
  height: 80%;

  text-align: center;

  margin: 0 1vw;
  padding: 0;

  border: none;
  border-radius: 20px;

  font-size: 1rem;
  font-weight: 600;

  color: #001AFF;
  background-color: #CACFFF;
  
  :hover {
    color: #FDFDFD;
    background-color: #001AFF;
  }
`;

const CorrectBox = styled.div`
  width: 10%;
  height: 80%;

  margin: 0 1vw;
  padding: 0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputButton = styled.button`
  width: 45%;
  height: 100%;

  text-align: center;

  border: none;
  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 600;

  color: #001AFF;
  background-color: #CACFFF;

  :hover {
    color: #FDFDFD;
    background-color: #001AFF;
  }
`;

export default ManagerBookForm;
