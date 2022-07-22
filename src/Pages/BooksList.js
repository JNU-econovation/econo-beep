import React from 'react';
import styled from 'styled-components';
import BookInfoList from '../Components/BookInfoList';

function BooksList() {
  const bookResultList = [
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
    { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookRent: '대여 가능' },
  ];
  return (
    <Body>
      <ListBox>
        {bookResultList.map((item) => (
          <BookInfoList
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
    </Body>
  );
}
const Body = styled.div``;

const ListBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default BooksList;
