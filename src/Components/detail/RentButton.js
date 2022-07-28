import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RENT_STATE from '../constant/RENT_STATE';

function RentButton({ id, isAvailable }) {
  if (isAvailable === RENT_STATE.UNRENTABLE) {
    return (
      <ButtonBox>
        <GrayButton>대여 불가</GrayButton>
      </ButtonBox>
    );
  } else if (isAvailable === RENT_STATE.RENTED) {
    const rentOrReturn = 'return';
    return (
      <Link to={`/pincode/` + rentOrReturn + '/' + id}>
        <ButtonBox>
          <RedButton>반납하기</RedButton>
        </ButtonBox>
      </Link>
    );
  } else if (isAvailable === RENT_STATE.RENTABLE) {
    const rentOrReturn = 'rent'
    return (
      <Link to={`/pincode/` + rentOrReturn + '/' + id}>
        <ButtonBox>
          <BlueButton>대여하기</BlueButton>
        </ButtonBox>
      </Link>
    );
  }
}

const ButtonBox = styled.div`
  width: 100%;
  height: 10vh;
  padding: 0.75rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  bottom: 0;
  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.rentRed};
`;

const BlueButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.rentBlue};

  border: 2px solid ${(props) => props.theme.rentBlue};
  
  font-size: 1.25rem;
  font-weight: 600;
`;

const RedButton = styled(BlueButton)`
  color: ${(props) => props.theme.rentRed};
  border: 2px solid ${(props) => props.theme.rentRed};
`;

const GrayButton = styled(BlueButton)`
  color: ${(props) => props.theme.rentGray};
  border: 2px solid ${(props) => props.theme.rentGray};
`;

export default RentButton;
