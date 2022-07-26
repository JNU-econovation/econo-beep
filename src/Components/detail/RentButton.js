import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RentButton({ renteeId, isAvailable }) {
  if (isAvailable === 'UNRENTABLE') {
    return (
      <ButtonBox>
        <GrayButton>대여 불가</GrayButton>
      </ButtonBox>
    );
  } else if (isAvailable === 'RENTABLE') {
    const rentOrReturn = 'return';
    return (
      <Link to={`/pincode/${rentOrReturn}/${renteeId}`}>
        <ButtonBox>
          <RedButton>반납하기</RedButton>
        </ButtonBox>
      </Link>
    );
  } else if (isAvailable === 'RENTED') {
    const rentOrReturn = 'rent'
    return (
      <Link to={`pincode/${rentOrReturn}/${renteeId}`}>
        <ButtonBox>
          <RedButton>반납하기</RedButton>
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
