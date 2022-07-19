import React from 'react-router-dom';
import styled from 'styled-components';
import SearchAll from './SearchAll';

function SearchAllHome() {
  return (
    <Box>
      <LogoText>econoBeep</LogoText>
      <SearchAll />
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  top: 35vh;
  
  @media screen and (max-width: 767px) {
    left: 10vw;
    width: 80vw;
  }
  
  @media screen and (min-width: 768px) {
    left: 20vw;
    width: 60vw;
  }
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;
  
  margin: 0.75rem;
  
  font-size: 2.75rem;
  color: ${(props) => props.theme.blue};
`;
export default SearchAllHome;
