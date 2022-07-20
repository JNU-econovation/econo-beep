import React from 'react';
import styled from 'styled-components';
import BookInfoInList from '../Components/BookInfoInList';

function BooksList() {
  const bookResultList = [
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
  ];
  return (
    <ListWrapper>
      <ListBox>
        {bookResultList.map((item) => (
          <BookInfoInList
            key={item.id}
            to={item.to}
            src={item.src}
            bookId={item.bookId}
            bookTitle={item.bookTitle}
            bookAuthorName={item.bookAuthorName}
            bookRent={item.bookRent}
          />
        ))}
      </ListBox>
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
`;

const ListBox = styled.div`
  @media screen and (max-width: 767px) {
    width: 82.5vw;
    margin: 0 8.625vw;
  }
  
  @media screen and (min-width: 768px) {
    width: 100vw;
    margin: 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default BooksList;
