import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { Stack } from '@mui/material';

function Profile() {

  let sessionStorage = window.sessionStorage;

  return (
    <Body>
      <InfoBox>
        <ProfileIcon>
          <BiUserCircle/>
        </ProfileIcon>
        <Name>권순찬</Name>
        <Stack direction={'row'} alignItems={'center'} >
          <CheckCircleOutlinedIcon color={'success'} />
          <Email>sckwon770@gmail.com</Email>
        </Stack>
      </InfoBox>
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
`;

export default Profile;