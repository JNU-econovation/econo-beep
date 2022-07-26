import React, { useState } from 'react';
import styled from 'styled-components';
import { RiPencilFill, RiDeleteBinLine } from 'react-icons/ri'
import Header from '../components/header/Header';
import ManagerButtonSearchHolder from '../components/manager/ManagerButtonSearchHolder';
import ManagerBookInfo from '../components/manager/ManagerBookInfo';
import ManagerBookInfoTitle from '../components/manager/ManagerBookInfoTitle';

function Manager() {

  const [isActivated, setIsActivated] = useState(true);
  const [viewMethod, setViewMethod] = useState(0);

  const book = {
    id: 123,
    src: "https://image.yes24.com/goods/102347474/XL",
    title: "인공지능을 위한 수학책이다",
    author: "저자저자저자저자",
    publisher: "출판사출판사",
    publishDay: "2022.06.08",
    type: "AI",
    note: "분실"
  }

  const onBookClick = () => {
    setIsActivated(true);
  }

  const onEquipmentClick = () => {
    setIsActivated(false);
  }

  const onViewChange = (e) => {
    setViewMethod(e.target.value);
  }

  return (
    <Body>
      <Header />
      <ManagerButtonSearchHolder
        isActivated={isActivated}
        onBookClick={onBookClick}
        onEquipmentClick={onEquipmentClick}
        viewMethod={viewMethod}
        onViewChange={onViewChange}
      />
      <InfoBox>
        <ManagerBookInfoTitle />
        <ManagerBookInfo
          id={book.id}
          src={book.src}
          title={book.title}
          author={book.author}
          publisher={book.publisher}
          publishDay={book.publishDay}
          type={book.type}
          note={book.note}
        />
      </InfoBox>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: ${(props) => props.theme.managerBgColor};
`;

const InfoBox = styled.div`
  width: 90%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Manager
