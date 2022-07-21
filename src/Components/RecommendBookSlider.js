import React from 'react';
import styled from 'styled-components';
import BookSlider from './BookSlider';

function RecommendBookSlider() {
  const recommendBookList = [
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
  ];

  return (
    <Box>
      <TextBox>
        <Text>추천 도서</Text>
      </TextBox>
      <BookSlider bookList={recommendBookList} />
    </Box>
  );
}

const Box = styled.div`
  position: relative;
  top: 25vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.black};
  margin: 0 5vw;
  
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
  
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

const Text = styled.div`
  @media screen and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    margin: 0 0 0 47px;
  }
`;

export default RecommendBookSlider;
