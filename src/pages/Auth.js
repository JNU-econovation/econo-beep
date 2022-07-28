import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Alert,
  Backdrop,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  TextField
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SESSION from '../constant/SESSION';
import { wait } from '@testing-library/user-event/dist/utils';


function Auth() {
  const navigate = useNavigate();
  let sessionStorage = window.sessionStorage;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIng, setIsLoggingIng] = React.useState(false);
  const [failAlert, setFailAlert] = React.useState(false);

  const handleOpenFailAlert = () => {
    setFailAlert(true);
  };

  const handleCloseFailAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setFailAlert(false);
  };


  const handleRegister = () => {

  }

  const handleLogin = async () => {
    setIsLoggingIng(true);

    const loginFormData = new FormData();
    loginFormData.append('userEmail', email);
    loginFormData.append('password', password);

    try {
      const response = await axios.post(process.env.REACT_APP_TECONO_API + 'login', loginFormData);

      sessionStorage.setItem(SESSION.IS_LOGGED_IN, true.toString());
      sessionStorage.setItem(SESSION.USER_EMAIL, response.data[SESSION.USER_EMAIL]);
      sessionStorage.setItem(SESSION.EMAIL_VERIFIED, response.data[SESSION.EMAIL_VERIFIED].toString());
      sessionStorage.setItem(SESSION.USER_NAME, response.data[SESSION.USER_NAME]);

      navigate('/');
    } catch (e) {
      handleOpenFailAlert();
    } finally {
      setIsLoggingIng(false);
    }
  }

  return (
    <Body>
      <LogoText>econoBeep</LogoText>
      <Title>로그인</Title>
      <Announcement>TECONO 계정 사용</Announcement>

        <TextField label="이메일" variant="outlined" type="email"
                   style={{marginBottom: '2vh', width: '100%'}}
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="비밀번호" variant="outlined" type="password"
                   style={{marginBottom: '4vh', width: '100%'}}
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
      <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={"100%"} marginBottom={"5vh"}>
        <Button variant="text" disableRipple onClick={handleRegister}>계정 만들기</Button>
        <Button variant="contained" onClick={handleLogin} >로그인</Button>
      </Stack>


      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoggingIng}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Snackbar open={failAlert} autoHideDuration={3000} onClose={handleCloseFailAlert}>
        <Alert onClose={handleCloseFailAlert} severity="error" sx={{ width: '100%' }}>
          로그인에 실패했습니다
        </Alert>
      </Snackbar>
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