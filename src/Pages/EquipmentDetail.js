import React from 'react';
import styled from 'styled-components';
import DetailBox from '../components/detail/DetailBox';
import RentBox from '../components/detail/RentBox';
import RentButton from '../components/detail/RentButton';
import Header from '../components/header/Header';

function EquipmentDetail() {
  const EQUIPMENT_DUMMY = { to: '/555', src: 'https://www.lge.co.kr/kr/images/monitors/md08920891/gallery/medium01.jpg', id: 'e-555', title: '모니터', equipmentAvailable: '대여하기' };
  const RENT_DUMMY = [
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
    { renter: '이윤성', rentalDate: '2022.03.29', returnDate: '2022.04.08' },
  ];

  return (
    <Body>
      <Header />
      <DetailBox rentee={EQUIPMENT_DUMMY} />

      <ContentBox>
        <RentBox rent={RENT_DUMMY} />
      </ContentBox>
      <RentButton isAvailable={EQUIPMENT_DUMMY.equipmentAvailable} />
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

export default EquipmentDetail;
