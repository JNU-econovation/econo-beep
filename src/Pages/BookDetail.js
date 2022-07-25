import React from 'react';
import styled from 'styled-components';
import DetailBox from '../Components/book/DetailBox';
import RentBox from '../Components/book/RentBox';
import RentButton from '../Components/book/RentButton';

function BookDetail() {
  const BOOK_DUMMY = { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', bookId: 'b-622', bookTitle: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookPublisher: '출판사입니다아아아아아', bookPublicationDay: '2021.03.08', bookAvailable: '반납하기', note: "비고란이다이말이야~알았냐고알앗ㅇ냐곹야루아ㅓㄹ니ㅏㅇ러ㅏㅣ" };

  const RENT_DUMMY = [
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
  ];

  return (
    <Body>
      <DetailBox book={BOOK_DUMMY} />

      <ContentBox>
        <RentBox rent={RENT_DUMMY} />
      </ContentBox>
      <RentButton isAvailable={BOOK_DUMMY.bookAvailable} />
    </Body>
  );
}

const ContentBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0.5rem 0;
  padding: 1rem 0;
  
  border-radius: 30px;
`;

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: #f2f2f2;
`;

export default BookDetail;
