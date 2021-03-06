import React from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SESSION from '../constant/SESSION';

function ProfileButton({ isToggled }) {
  return (
    <Profile isToggled={isToggled}>
      {
        sessionStorage.getItem(SESSION.IS_LOGGED_IN) === 'true' &&
        <UserName>
          {sessionStorage.getItem(SESSION.USER_NAME)} λΆμλ!
        </UserName>
      }
      {!isToggled ? <Link
          to={sessionStorage.getItem(SESSION.IS_LOGGED_IN) === 'true' ? '/profile' : '/auth'}><Box><BiUserCircle/></Box></Link> :
        <NoLogo/>}
    </Profile>
  );
}

const Profile = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem;
  margin-right: 0.25rem;
  border: none;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const NoLogo = styled.div`
  width: 2rem;
  height: 2rem;
  
  display: block;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: ${(props) => props.theme.blue};

  font-size: 2rem;

  cursor: pointer;
`;
export default ProfileButton;
