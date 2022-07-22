import React from 'react';
import styled from 'styled-components';
import Detail from '../Components/Detail';
import DetailImg from '../Components/DetailImg';
import DetailTitle from '../Components/DetailTitle';
import DetailInfo from '../Components/DetailInfo';
import DetailNote from '../Components/DetailNote';
import Rent from '../Components/Rent';

function BookDetail() {
  const book = { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookPublisher: '출판사입니다아아아아아', bookPublicationDay: '2021.03.08', bookRent: '대여 가능' };

  const bookType = { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png' };

  const rent = [
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
  ];

  return (
    <Body>
      <Detail>
        <DetailImg src={book.src} />
        <DetailTitle src={bookType.src} id={book.bookId} title={book.bookTitle} />
        <DetailInfo
          author={book.bookAuthorName}
          publisher={book.bookPublisher}
          publicationDay={book.bookPublicationDay}
        />
        <DetailNote note="비고란이다이말이야~알았냐고알앗ㅇ냐곹야루아ㅓㄹ니ㅏㅇ러ㅏㅣ" />
      </Detail>
      <Detail>
        <Rent rent={rent} />
      </Detail>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #f2f2f2;
`;

export default BookDetail;
