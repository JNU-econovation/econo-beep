import React from 'react';
import styled from 'styled-components';
import Header from '../Components/header/Header';
import Category from '../Components/home/Category';
import Banners from '../Components/home/Banners';
import RecommendBookSlider from '../Components/home/RecommendBookSlider';
import Footer from '../Components/Footer';
import SearchAllBar from '../Components/search/SearchAllBar';

function Home() {
  return (
    <Body>
      <MainPage>
        <Header />
        <SearchBarHolder>
          <LogoText>econoBeep</LogoText>
          <SearchAllBar />
        </SearchBarHolder>
        <Banners />
      </MainPage>

      <ExpendPage>
        <Category />
        <RecommendBookSlider />
        <Footer />
      </ExpendPage>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const MainPage = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
`;

const SearchBarHolder = styled.div`
  position: absolute;
  top: 35vh;
  
  @media screen and (max-width: 767px) {
    left: 10vw;
    width: 80vw;
  }
  
  @media screen and (min-width: 768px) {
    left: 20vw;
    width: 60vw;
  }
`;

const LogoText = styled.div`
  display: flex;
  justify-content: center;
  
  margin: 0.75rem;
  
  font-size: 2.75rem;
  font-family: ${(props) => props.theme.fontFamilyLogo};
  color: ${(props) => props.theme.blue};
`;

const ExpendPage = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  position: relative;
`;

export default Home;
