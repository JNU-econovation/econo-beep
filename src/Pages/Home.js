import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banners from '../Components/Banners';
import RecommendBookSlider from '../Components/RecommendBookSlider';
import SearchAll from '../Components/SearchAll';
import Footer from '../Components/Footer';

function Home() {
  return (
    <Body>
      <Header />
      <SearchAll />
      <Banners />
      <Category />
      <RecommendBookSlider />
      <Footer />
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
