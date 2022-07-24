import React, { useState } from 'react';
import styled from 'styled-components';
import Keyboard from '../components/pincode/Keyboard';
import Circle from '../components/pincode/Circle';

function PinCode() {
  const [number, setNumber] = useState('');
  const numberLength = number.length;

  const sendNumber = () => {
  }

  const deleteNumber = () => {
    setNumber(``);
  }

  const addNumber = (e) => {
    if (numberLength < 4) {
      setNumber((number) => (number + e.target.value));
    }
  }

  return (
    <Body>
      <PinCodeBox>
        <ResultBox>
          <TextBox>PIN CODE 입력</TextBox>
          <Circle numberLength={numberLength} />
        </ResultBox>
        <Keyboard addNumber={addNumber} deleteNumber={deleteNumber} sendNumber={sendNumber}/>
      </PinCodeBox>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
`;

const PinCodeBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 1000px;
  
  position: relative;
`;

const ResultBox = styled.div`
  width: 100%;
  height: 50%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  margin: 1rem 0;
  color: ${(props) => props.theme.black};
  font-size: 1.2rem;
`;

export default PinCode;
