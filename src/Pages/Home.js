import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banners from '../Components/Banners';
import BookSlider from '../Components/BookSlider';
import SearchAll from '../Components/SearchAll';

function Home() {
  return (
    <Body>
      <Header />
      <SearchAll />
      <Banners />
      <Category />
      <BookSlider />
    </Body>
  );
}

const Body = styled.div`
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
