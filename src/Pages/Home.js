import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

function Home() {
  return (
    <Body>
      <Header />
    </Body>
  );
}

const Body = styled.body`
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 200vh;
  }
  @media screen and (min-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

export default Home;
