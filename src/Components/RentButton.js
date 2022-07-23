import React, { useState } from 'react';
import styled from 'styled-components';
import { Backdrop } from '@mui/material';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { RiCloseCircleFill } from 'react-icons/ri';

function RentButton() {
  const [open, setOpen] = useState(false);
  const [send, setSend] = useState(false);
  const handleButton = () => setOpen(!open);
  const handleClose = () => setOpen(false);
  const handleSend = () => setSend(!send);

  return (
    <Box>
      <ButtonBox>
        <Button onClick={handleButton}>반납하기</Button>
      </ButtonBox>
      <Backdrop open={open}>
        <PinCode>
          <Input onClick={handleSend} type="password" placeholder="PINCODE를 입력하세요" maxlength="4" />
          <SubmitButton type="submit">
            { send ? <BsFillArrowUpCircleFill /> : <RiCloseCircleFill onClick={handleClose} />}
          </SubmitButton>
        </PinCode>
      </Backdrop>
    </Box>
  );
}
const PinCode = styled.form`
  width: 80%;
  height: 8%;
  
  margin: 0.5rem;
  padding: 0.5rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 20px;
  border: 2px solid ${(props) => props.theme.blue};
  
  position: fixed;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border: none;
  outline: none;
  color: ${(props) => props.theme.blue};
  
  text-align: center;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  height: 100%;
  padding: 0;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
  
  border: none;
  
  font-size: 2rem;
`;

const Box = styled.div``;

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

const Button = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.rentRed};

  border: 2px solid ${(props) => props.theme.rentRed};
  
  font-size: 1.25rem;
  font-weight: 600;
`;

export default RentButton;
