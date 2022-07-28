import React from 'react';
import BookSlider from './BookSlider';
import ContentTitle from './ContentTitle';
import Content from './Content';

function RecommendBookSlider() {
  const recommendBookList = [
    { id: 1, to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { id: 2, to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
    { id: 3,  to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { id: 4, to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
  ];

  return (
    <Content>
      <ContentTitle>추천 도서</ContentTitle>
      <BookSlider bookList={recommendBookList} />
    </Content>
  );
}

export default RecommendBookSlider;
