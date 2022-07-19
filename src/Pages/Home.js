import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banners from '../Components/Banners';
import RecommendBookSlider from '../Components/RecommendBookSlider';
import SearchAllHome from '../Components/SearchAllHome';
import Footer from '../Components/Footer';

function Home() {
  return (
    <Body>
      <Header />
      <Box>
        <SearchAllHome />
        <Banners />
      </Box>
      <Box>
        <Category />
        <RecommendBookSlider />
        <Footer />
      </Box>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 200vh;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const Box = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

export default Home;
