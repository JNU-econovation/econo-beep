import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banners from '../Components/Banners';
import SearchAll from '../Components/SearchAll';

function Home() {
  return (
    <Body>
      <Header />
      <SearchAll />
      <Category />
      <Banners />
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
