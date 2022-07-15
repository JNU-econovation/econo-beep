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
`;
export default Home;
