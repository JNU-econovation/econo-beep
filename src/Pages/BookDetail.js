import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import DetailBox from '../components/detail/DetailBox';
import RentBox from '../components/detail/RentBox';
import RentButton from '../components/detail/RentButton';
import Header from '../components/header/Header';

function BookDetail() {
  const { id } = useParams();

  const [BOOK_DUMMY, setBookDummy] = useState({});
  const [RENT_DUMMY, setRentDummy] = useState([]);

  const getBookDummy = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + "book/" + id,
      {params: {id: id}});
    const dataList = list.data
    const historyList = dataList.rentalHistories

    setBookDummy(dataList);
    setRentDummy([...historyList]);
    console.log(BOOK_DUMMY);
    console.log(RENT_DUMMY);
  }

  useEffect(() => {
    getBookDummy();
  }, [id]);

  return (
    <Body>
      <Header />
      <DetailMain>
        <DetailBox rentee={BOOK_DUMMY} />
        <ContentBox>
          <RentBox rent={RENT_DUMMY} />
        </ContentBox>
        <RentButton renteeId={BOOK_DUMMY.id} isAvailable={BOOK_DUMMY.rentState} />
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
