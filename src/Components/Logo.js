import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <Box>
      <h2>econoBeep</h2>
    </Box>
  );
}

const Box = styled.div`
  margin: 0 1rem;
  
  font-size: 1.5rem;
`;

export default Logo;
