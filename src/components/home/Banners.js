import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Banner from './Banner';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banners() {
  const bannerInfos = [
    { id:1, href: 'https://econovation.kr/about', bgColor: 'black', text: '에코노베이션 홈페이지' },
    { id:2, href: 'https://econovation.kr/about', bgColor: '#2269fa', text: 'T-econo' },
  ];

  return (
    <BannersSlider
      dots={true}
      arrows={false}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      autoplay={true}
      autoplaySpeed={2500}
      pauseOnHover={true}
    >

      {bannerInfos.map((item) => (
        <Banner key={item.id} href={item.href} bgColor={item.bgColor} text={item.text}/>
      ))}
    </BannersSlider>
  );
}

export default Banners;

const BannersSlider = styled(Slider)`
  height: 12.5vh;
  width: 90vw;

  position: absolute;
  bottom: 4vh;

  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;


  .slick-dots {
    z-index: 1;

    padding-right: 5px;
    padding-top: 5px;

    position: absolute;
    text-align: end;

    top: 0px;
    right: 0px;

    width: 100px;
    height: 30%;
  }

  .slick-dots button {
    display: block;

    width: 8px;
    height: 8px;
    padding: 0;

    border: none;
    border-radius: 100%;
    background-color: ${(props) => props.theme.bgColor};

    cursor: pointer;
  }

  .slick-dots li button:before {
    display: none;
  }

  .slick-dots li.slick-active button {
    background-color: #FF7C7C;
  }
`;
