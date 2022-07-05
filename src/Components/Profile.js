import React from 'react';
import styled from 'styled-components';
import { BiUserCircle } from 'react-icons/bi';

function Profile({ isToggled }) {
  return (
    <Box isToggled={isToggled}>
      {!isToggled ? <BiUserCircle /> : <div className="no__profile" /> }
    </Box>
  );
}

const Box = styled.button`
  display: block;
  padding: 0.2rem 0.2rem;
  border: none;
  
  font-size: 2rem;
  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.bgColor};
`;

export default Profile;
