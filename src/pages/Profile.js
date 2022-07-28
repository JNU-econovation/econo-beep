import React, { useEffect } from 'react';
import styled from 'styled-components';

function Profile() {

  return (
    <Body>
      Profile
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default Profile;