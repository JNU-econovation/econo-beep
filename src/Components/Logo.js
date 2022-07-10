import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Box>
      <StyledLink to="/">econoBeep</StyledLink>
    </Box>
  );
}

const Box = styled.div`
  margin: 0 1rem;
  font-size: 1.5rem;
  
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.blue};
`;

export default Logo;
