import React from 'react';
import BookSlider from './BookSlider';

function RecommendBookSlider() {
  const recommendBookList = [
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
    { to: '/인공지능책', src: 'http://image.yes24.com/goods/66913718/XL' },
    { to: '/소설', src: 'http://image.yes24.com/goods/109705390/XL' },
  ];

  return (
    <BookSlider bookList={recommendBookList} />
  );
}

export default RecommendBookSlider;
