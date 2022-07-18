import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import RecommendBook from './RecommendBook';

function BookSlider({bookList}) {
  return (
    <SliderBox
      dots={false}
      arrows={false}
      infinite
      speed={500}
      slidesToShow={3}
      slidesToScroll={1}
      autoplay
      autoplaySpeed={2000}
      pauseOnHover
    >
      {bookList.map((item) => (
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
