import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DetailBox from '../components/detail/DetailBox';
import RentBox from '../components/detail/RentBox';
import RentButton from '../components/detail/RentButton';
import Header from '../components/header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EquipmentDetail() {
  const { id } = useParams();

  const [RENTEE_DUMMY, setRenteeDummy] = useState({});
  const [RENTAL_RECORD, setRentalRecord] = useState([]);

  const getRenteeDummy = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + "/rentee/" + id,
      {params: {id: id}});
    const dataList = list.data
    const historyList = dataList.rentalHistories

    setRenteeDummy(dataList);
    setRentalRecord([...historyList]);
  }

  useEffect(() => {
    getRenteeDummy();
  }, [id]);
  return (
    <Body>
      <Header />
      <DetailMain>
        <DetailBox rentee={RENTEE_DUMMY} />

        <ContentBox>
          <RentBox rent={RENTAL_RECORD} />
        </ContentBox>
        <RentButton id={RENTEE_DUMMY.id} isAvailable={RENTEE_DUMMY.rentState} />
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

export default EquipmentDetail;
