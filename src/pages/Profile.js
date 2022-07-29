import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Button, Stack } from '@mui/material';
import SESSION from '../constant/SESSION';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  let sessionStorage = window.sessionStorage;

  useEffect(() => {
    console.log(sessionStorage.getItem(SESSION.IS_LOGGED_IN));
    console.log(sessionStorage.getItem(SESSION.USER_EMAIL));
    console.log(sessionStorage.getItem(SESSION.EMAIL_VERIFIED));
    console.log(sessionStorage.getItem(SESSION.USER_NAME));
  }, []);


  const logOut = () => {
    sessionStorage.clear();

    navigate('/');
  }

  return (
    <Body>
      <InfoBox>
        <ProfileIcon>
          <BiUserCircle/>
        </ProfileIcon>
        <Name>{sessionStorage.getItem(SESSION.USER_NAME)}</Name>
        <Stack direction={'row'} alignItems={'center'}>
          {
            sessionStorage.getItem(SESSION.EMAIL_VERIFIED) === 'true' &&
            <CheckCircleOutlinedIcon color={'success'}/>
          }
          <Email>{sessionStorage.getItem(SESSION.USER_EMAIL)}</Email>
        </Stack>
      </InfoBox>

      <Button variant="outlined" color={'error'} size={'large'} onClick={logOut} style={{position: 'absolute', bottom: '5vh'}} >로그아웃</Button>
    </Body>
  );
}

const InfoBox = styled.div`
  width: 100vw;
  height: 40vh;

  border-bottom: 2px solid ${(props) => props.theme.borderGray};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileIcon = styled.div`
  color: ${(props) => props.theme.blue};
  font-size: 28vw;

  margin-bottom: 1.5vh;
`;

const Name = styled.div`
  font-size: 6vw;
  font-weight: 500;

  margin-bottom: 1vh;
`;

const Email = styled.div`
  font-size: 3.6vw;
  margin-left: 1vw;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
`;

export default Profile;