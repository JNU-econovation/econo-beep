import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Classifications from '../Components/Classifications';

function Home() {
  return (
    <Body>
      <Header />
      <Classifications />
    </Body>
  );
}

const Body = styled.body`
  width: 100vw;
  height: 200vh;
`;
export default Home;
