import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <LogoText>econoBeep</LogoText>
    </Link>
  );
}

const LogoText = styled.div`
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.blue};
  
  cursor: pointer;
`;

export default Logo;
