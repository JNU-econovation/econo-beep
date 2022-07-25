import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Keyboard from '../components/pincode/Keyboard';
import Circle from '../components/pincode/Circle';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PinCode() {
  const { isAvailable, renteeId } = useParams();
  const [number, setNumber] = useState([]);


  const deleteNumber = () => {
    setNumber((number) => number.slice(0, -1));
  }

  const deleteAll = () => {
    setNumber([]);
  }

  const addNumber = (e) => {
    if (number.length <= 3) {
      setNumber((number) => [...number, e.target.value]);
    }
  }

  const sendReturn = async () => {
    const post = {
      id: parseInt(renteeId),
      pinCode: number.join(""),
    };
    console.log(post);

    await axios.put(process.env.REACT_APP_BEEP_API + 'book/' + renteeId + '/return', post);
  }

  const sendRent =  async () => {
    const post = {
      id: parseInt(renteeId),
      pinCode: number.join("")
    }

    await axios.put(process.env.REACT_APP_BEEP_API + 'book/' + renteeId + '/rent', post);
  }

  useEffect(() => {
    if (number.length === 4) {
      if (isAvailable === 'return') {
        sendReturn();
      } else if (isAvailable === 'rent') {
        sendRent();
      }
    }
  }, [number])

  return (
    <Body>
      <PinCodeBox>
        <ResultBox>
          <TextBox>PIN CODE 입력</TextBox>
          <Circle numberLength={number.length} />
          <div>{number}</div>
        </ResultBox>
        <Keyboard addNumber={addNumber} deleteAll={deleteAll} deleteNumber={deleteNumber}/>
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
