import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banners from '../Components/Banners';
import BookSlider from '../Components/BookSlider';

function Home() {
  return (
    <Body>
      <Header />
      <Banners />
      <Category />
      <BookSlider />
    </Body>
  );
}

const Body = styled.div`
  }
`;

export default Home;
