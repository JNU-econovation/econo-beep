import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DetailBox from '../components/detail/DetailBox';
import RentBox from '../components/detail/RentBox';
import RentButton from '../components/detail/RentButton';
import Header from '../components/header/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function BookDetail() {
  // const BOOK_DUMMY = { to: '/389', src: 'http://image.yes24.com/goods/66913718/XL', id: 'b-622', title: '인공지능을 위한 수학', bookAuthorName: '이사카와 어쩌구저쩌구', bookPublisher: '출판사입니다아아아아아', bookPublicationDay: '2021.03.08', bookAvailable: '반납하기', note: "비고란이다이말이야~알았냐고알앗ㅇ냐곹야루아ㅓㄹ니ㅏㅇ러ㅏㅣ" };

  const RENT_DUMMY = [
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
  ];

  const { id } = useParams();
  const [BOOK_DUMMY, setBookDummy] = useState({});

  const getBookDummy = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + "book/" + id,
      {params: {id: id}});
    const dataList = list.data
    console.log(dataList)

    setBookDummy(dataList);
  }

  useEffect(() => {
    getBookDummy();
  }, []);


  return (
    <Body>
      <Header />
      <DetailMain>
        <DetailBox rentee={BOOK_DUMMY} />
        <ContentBox>
          <RentBox rent={RENT_DUMMY} />
        </ContentBox>
        <RentButton isAvailable={BOOK_DUMMY.bookAvailable} />
      </DetailMain>
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
  
  background-color: ${(props) => props.theme.bgColor};
`;

const DetailMain = styled.div`
  width: 100%;
  height: 100%;

  background-color: #f2f2f2;
`;
export default BookDetail;
