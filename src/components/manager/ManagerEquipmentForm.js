import React from 'react';
import styled from 'styled-components';

function ManagerEquipmentForm({correctData, onCorrectClick}) {
  return (
    <Form>
      <InputImg >
        <input type="file" placeholder="이미지" id="thumbnailImg" />
      </InputImg>
      <InputTitle placeholder="제목" id="title" />
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
`;

const InputImg = styled.div`
  width: 30%;
  height: 100%;
  
  padding-left: 5%;

  border: none;
  border-radius: 10px;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputTitle = styled.input`
  width: 30%;
  height: 100%;
  
  border: none;
  border-radius: 10px;
  
  text-align: center;
`;


const InputNote = styled.input`
  width: 30%;
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


export default ManagerEquipmentForm;
