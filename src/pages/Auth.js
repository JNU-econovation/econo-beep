import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Stack, TextField } from '@mui/material';
import axios from 'axios';

function Auth() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {

  }

  const handleLogin = async () => {
    // MODIFY
    const response = await axios.post(process.env.REACT_APP_BEEP_API + "login", {
      userEmail: "",
      password: ""
    })
    console.log(response);
  }

  return (
    <Body>
      <LogoText>econoBeep</LogoText>
      <Title>로그인</Title>
      <Announcement>TECONO 계정 사용</Announcement>

        <TextField label="이메일" variant="outlined" type="email"
                   style={{marginBottom: '4vh', width: '100%'}}
                   value={id}
                   onChange={(e) => setId(e.target.value)}/>
        <TextField label="비밀번호" variant="outlined" type="password"
                   style={{marginBottom: '4vh', width: '100%'}}
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={"100%"} marginBottom={"5vh"}>
        <Button variant="text" disableRipple>계정 만들기</Button>
        <Button variant="contained">로그인</Button>
      </Stack>
    </Body>
  );
}

const LogoText = styled.div`
  display: flex;
  justify-content: center;
  
  margin-bottom: 3vh;
  
  font-size: 3rem;
  font-family: ${(props) => props.theme.fontFamilyLogo};
  color: ${(props) => props.theme.blue};
`;

const Title = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1.2vh;
`

const Announcement = styled.div`
  font-size: 0.75rem;
  margin-bottom: 8vh;
`

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Auth;