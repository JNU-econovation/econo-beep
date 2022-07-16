import React from 'react';
import styled from 'styled-components';
import SearchBar from '../Components/SearchBar';

function Home() {
  return (
    <Body>
      <SearchBar />
    </Body>
  );
}

const Body = styled.div`
`;

export default Home;
