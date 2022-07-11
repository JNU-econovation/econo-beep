import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';

function Home() {
  return (
    <Body>
      <Header />
      <Category />
    </Body>
  );
}

const Body = styled.body`
  width: 100vw;
  height: 200vh;
`;
export default Home;
