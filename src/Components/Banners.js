import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Banner from './Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banners() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  const items = [
    { href: 'https://econovation.kr/about', bgColor: 'black', text: '에코노베이션 홈페이지' },
    { href: 'https://econovation.kr/about', bgColor: 'blue', text: 'T-ECONO' },
    { href: 'https://www.youtube.com/channel/UCepdmgc4w5EQIc1J0lqXVtA', bgColor: '#FF0000', text: '에코노베이션 유튜브' },
  ];

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <StyledSlider {...settings} position="absolute" top="50vh">
      {items.map((item) => (
        <Banner href={item.href} bgColor={item.bgColor} text={item.text} />
      ))}
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  
  @media screen and (max-width: 767px) {
    width: 90vw;
    height: 12.5vh;

    top: 85vh;
    left: 5vw;
  }
  
  @media screen and (min-width: 768px) {
    width: 30vw;
    height: 15vh;
    
    top: 50vh;
    left: 35vw;
  }
`;

export default Banners;
