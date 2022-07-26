import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ManagerButtonSearchHolder from '../components/manager/ManagerButtonSearchHolder';
import ManagerBookInfo from '../components/manager/ManagerBookInfo';
import ManagerBookInfoTitle from '../components/manager/ManagerBookInfoTitle';
import ManagerEquipmentInfo from '../components/manager/ManagerEquipmentInfo';
import ManagerEquipmentInfoTitle from '../components/manager/ManagerEquipmentInfoTitle';
import ManagerBookForm from '../components/manager/ManagerBookForm';

function Manager() {

  const [isActivated, setIsActivated] = useState(true);
  const [viewMethod, setViewMethod] = useState(0);
  const [correctData, setCorrectData] = useState(false);
  const [deleteData, setDeleteData] = useState(false);

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
  const equipment = {
    id: 345,
    src: 'https://www.lge.co.kr/kr/images/monitors/md08951826/gallery/medium02.jpg',
    title: "LG 24인치 모니터",
    type: "EQUIPMENT",
    note: ""
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

  const onCorrectClick = () => {
    setCorrectData(true);
  }

  const onDeleteClick = () => {
    setDeleteData(true);
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
      {isActivated ? (
        <Box>
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
            onCorrectClick={onCorrectClick}
            onDeleteClick={onDeleteClick}
          />
        </Box>
      ) : (
        <Box>
          <ManagerEquipmentInfoTitle />
          <ManagerEquipmentInfo
            id={equipment.id}
            src={equipment.src}
            title={equipment.title}
            type={equipment.type}
            note={equipment.note}
            onCorrectClick={onCorrectClick}
            onDeleteClick={onDeleteClick}
          />
        </Box>
      )}
      {isActivated ? (
        <FormBox>
          <ManagerBookForm correctData={correctData}/>
        </FormBox>
      ) : (
        <FormBox>
          dd
        </FormBox>
      )}
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

const Box = styled.div`
  width: 90%;
  
  margin-bottom: 3vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormBox = styled(Box)`
  position: absolute;
  
  bottom: 0;
`;

export default Manager
