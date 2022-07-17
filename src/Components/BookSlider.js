import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendBook from './RecommendBook';

function BookSlider() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    className: 'big',
    responsive: [
      {
        breakpoints: 500,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const recommendBookList = [
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
  ];

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <SliderBox {...sliderSettings}>
      {recommendBookList.map((item) => (
        <RecommendBook key={item.id} to={item.to} src={item.src} />
      ))}
    </SliderBox>
  );
}

const SliderBox = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  
  .slick-track {
   overflow-x: hidden;
  }
  
  @media screen and (max-width: 767px) {
    width: 90vw;
    left: 5vw;
  }
  
  @media screen and (min-width: 768px) {
    .slick-list {
      width: 700px;
    }
  }
`;

export default BookSlider;
