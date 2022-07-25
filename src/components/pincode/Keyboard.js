import React from 'react'
import styled from 'styled-components';

function Keyboard({ addNumber, deleteAll, deleteNumber }) {
  return (
    <KeyboardBox>
      <KeyboardColumn>
        <KeyboardButton value='1' onClick={addNumber}>1</KeyboardButton>
        <KeyboardButton value='2' onClick={addNumber}>2</KeyboardButton>
        <KeyboardButton value='3' onClick={addNumber}>3</KeyboardButton>
      </KeyboardColumn>
      <KeyboardColumn>
        <KeyboardButton value='4' onClick={addNumber}>4</KeyboardButton>
        <KeyboardButton value='5' onClick={addNumber}>5</KeyboardButton>
        <KeyboardButton value='6' onClick={addNumber}>6</KeyboardButton>
      </KeyboardColumn>
      <KeyboardColumn>
        <KeyboardButton value='7' onClick={addNumber}>7</KeyboardButton>
        <KeyboardButton value='8' onClick={addNumber}>8</KeyboardButton>
        <KeyboardButton value='9' onClick={addNumber}>9</KeyboardButton>
      </KeyboardColumn>
      <KeyboardColumn>
        <KeyboardTextButton onClick={deleteAll}>전체삭제</KeyboardTextButton>
        <KeyboardButton value='0' onClick={addNumber}>0</KeyboardButton>
        <KeyboardTextButton onClick={deleteNumber}>삭제</KeyboardTextButton>
      </KeyboardColumn>
    </KeyboardBox>
  );
}

const KeyboardBox = styled.div`
  width: 100%;
  height: 50%;
  
  position: absolute;
  bottom: 0;
  
  background-color: ${(props) => props.theme.bgColor};
  border-top: ${(props) => props.theme.borderTop};
`;

const KeyboardColumn = styled.div`
  width: 100%;
  height: 25%;
`;

const KeyboardButton = styled.button`
  width: 33.33%;
  height: 100%;
  
  padding: 0;
  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.black};
  
  border: none;
  
  font-weight: 500;
  font-size: 1.5rem;
`;

const KeyboardTextButton = styled(KeyboardButton)`
  font-size: 1rem;
`;


export default Keyboard;
