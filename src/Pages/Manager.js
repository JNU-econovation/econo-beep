import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import ManagerButtonSearchHolder from '../components/manager/ManagerButtonSearchHolder';
import ManagerBookInfo from '../components/manager/ManagerBookInfo';
import ManagerBookInfoTitle from '../components/manager/ManagerBookInfoTitle';
import ManagerEquipmentInfo from '../components/manager/ManagerEquipmentInfo';
import ManagerEquipmentInfoTitle from '../components/manager/ManagerEquipmentInfoTitle';
import ManagerBookForm from '../components/manager/ManagerBookForm';
import ManagerEquipmentForm from '../components/manager/ManagerEquipmentForm';
import axios from 'axios';

function Manager() {
  const [isBookActivated, setIsBookActivated] = useState(true);
  const [viewMethod, setViewMethod] = useState(0);
  const [correctData, setCorrectData] = useState(null);
  // const [deleteData, setDeleteData] = useState(false);

  const [lastBookId, setLastBookId] = useState(null);
  const [bookList, setBookList] = useState([]);

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
    setIsBookActivated(true);
  }

  const onEquipmentClick = () => {
    setIsBookActivated(false);
  }

  const onViewChange = (e) => {
    setViewMethod(e.target.value);
  }

  const onCorrectClick = () => {
    setCorrectData(!correctData);
  }

  // const onDeleteClick = () => {
  //   setDeleteData(true);
  // }

  const getBookList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + 'management/book/list/all', {
      params: {
        pageSize: 8,
        lastBookId: lastBookId
      }
    });

    const dataList = list.data
    console.log(dataList);
    setBookList((bookList) => [...dataList]);
  }

  useEffect(() => {
    getBookList();
  }, [])

  return (
    <Body>
      <Header />
      <ManagerButtonSearchHolder
        isBookActivated={isBookActivated}
        onBookClick={onBookClick}
        onEquipmentClick={onEquipmentClick}
        viewMethod={viewMethod}
        onViewChange={onViewChange}
      />
      {isBookActivated ? (
        <Box>
          <ManagerBookInfoTitle />
          {bookList.map((item) => (
            <ManagerBookInfo
              id={item.id}
              src={process.env.REACT_APP_BEEP_API+item.thumbnailUrl}
              title={item.title}
              author={item.authorName}
              publisher={item.publisherName}
              publishDay={item.publishedDateEpochSecond}
              type={item.type}
              note={item.note}
              setCorrectData = {setCorrectData}
            />
          ))}
          <ManagerBookInfo
            id={book.id}
            src={book.src}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            publishDay={book.publishDay}
            type={book.type}
            note={book.note}
            setCorrectData={setCorrectData}
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
            setCorrectData={setCorrectData}
          />
        </Box>
      )}
      {isBookActivated ? (
        <FormBox>
          <ManagerBookForm correctData={correctData} setCorrectData={setCorrectData} />
        </FormBox>
      ) : (
        <FormBox>
          <ManagerEquipmentForm correctData={correctData} setCorrectData={setCorrectData} />
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
