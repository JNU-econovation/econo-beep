import React from 'react'
import styled from 'styled-components';

function Keyboard({ addNumber, deleteNumber, sendNumber }) {
  return (
    <KeyBoardBox>
      <KeyBoardColumn>
        <KeyBoardButton value='1' onClick={addNumber}>1</KeyBoardButton>
        <KeyBoardButton value='2' onClick={addNumber}>2</KeyBoardButton>
        <KeyBoardButton value='3' onClick={addNumber}>3</KeyBoardButton>
      </KeyBoardColumn>
      <KeyBoardColumn>
        <KeyBoardButton value='4' onClick={addNumber}>4</KeyBoardButton>
        <KeyBoardButton value='5' onClick={addNumber}>5</KeyBoardButton>
        <KeyBoardButton value='6' onClick={addNumber}>6</KeyBoardButton>
      </KeyBoardColumn>
      <KeyBoardColumn>
        <KeyBoardButton value='7' onClick={addNumber}>7</KeyBoardButton>
        <KeyBoardButton value='8' onClick={addNumber}>8</KeyBoardButton>
        <KeyBoardButton value='9' onClick={addNumber}>9</KeyBoardButton>
      </KeyBoardColumn>
      <KeyBoardColumn>
        <KeyBoardTextButton onClick={deleteNumber}>삭제</KeyBoardTextButton>
        <KeyBoardButton value='0' onClick={addNumber}>0</KeyBoardButton>
        <KeyBoardTextButton onClick={sendNumber}>확인</KeyBoardTextButton>
      </KeyBoardColumn>
    </KeyBoardBox>
  );
}

const KeyBoardBox = styled.div`
  width: 100%;
  height: 50%;
  
  position: absolute;
  bottom: 0;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const KeyBoardColumn = styled.div`
  width: 100%;
  height: 25%;
`;

const KeyBoardButton = styled.button`
  width: 33.33%;
  height: 100%;
  
  padding: 0;
  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.black};
  
  border: none;
  
  font-weight: 500;
  font-size: 1.5rem;
`;

const KeyBoardTextButton = styled(KeyBoardButton)`
  font-size: 1rem;
`;


export default Keyboard;
