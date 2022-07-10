import React from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';

function Profile({ isToggled }) {
  return (
    <Box isToggled={isToggled}>
      {!isToggled ? <BiUserCircle /> : <div /> }
    </Box>
  );
}

const Box = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  
  font-size: 2rem;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};

  cursor: pointer;
`;

export default Profile;
