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

const serverBookSortListingUrl = [
  'management/list/book', // 최근에 추가된 순
  '', // 이전에 추가된 순
  '', // 최근에 대여된 순
];

const serverEquipmentSortListingUrl = [
  'management/list/equipment', // 최근에 추가된 순
  '', // 이전에 추가된 순
  '', // 최근에 대여된 순
];

const serverBookSortSearchingUrl = [
  'management/search/book', // 최근에 추가된 순
  '', // 이전에 추가된 순
  '', // 최근에 대여된 순
];

const serverEquipmentSortSearchingUrl = [
  'management/search/equipment', // 최근에 추가된 순
  '', // 이전에 추가된 순
  '', // 최근에 대여된 순
];

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  const [sortOrder, setSortOrder] = useState(0);
  const [editingRentee, setEditingRentee] = useState(null);

  const [rentees, setRentees] = useState([]);
  const [lastRenteeId, setLastRenteeId] = useState(null);

  useEffect(() => {
    if (isBookMode) {
      getListedBooks();
    } else {
      getListedEquipments();
    }
  }, [isBookMode, sortOrder]);

  const onBookClick = () => {
    setIsBookMode(true);
    setLastRenteeId(null);
  };

  const onEquipmentClick = () => {
    setIsBookMode(false);
    setLastRenteeId(null);
  };

  const onSearchPress = async (keyword) => {
    if (isBookMode) {
      getSearchedBooks(keyword);
    } else {
      getSearchedEquipments(keyword);
    }
  };

  const getSearchedBooks = async (keyword) => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + serverBookSortSearchingUrl[sortOrder], {
      params: {
        keyword: keyword,
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });

    const dataList = response.data;
    setRentees(dataList);
    if (dataList.length !== 0) {
      setLastRenteeId(dataList[dataList.length - 1].id);
    }
  };

  const getSearchedEquipments = async (keyword) => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + serverEquipmentSortListingUrl[sortOrder], {
      params: {
        keyword: keyword,
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });

    const dataList = response.data;
    setRentees(dataList);
    if (dataList.length !== 0) {
      setLastRenteeId(dataList[dataList.length - 1].id);
    }
  };

  const getListedBooks = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + serverBookSortListingUrl[sortOrder], {
      params: {
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });

    const dataList = list.data;
    setRentees(dataList);
    if (dataList.length !== 0) {
      setLastRenteeId(dataList[dataList.length - 1].id);
    }
  };

  const getListedEquipments = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + serverEquipmentSortListingUrl[sortOrder], {
      params: {
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });

    const dataList = list.data;
    setRentees(dataList);
    if (dataList.length !== 0) {
      setLastRenteeId(dataList[dataList.length - 1].id);
    }
  };

  const createBook = async (book) => {

  };

  const createEquipment = async (equipment) => {

  };

  const updateBook = async (book) => {

  };

  const updateEquipment = async (equipment) => {

  };

  const deleteBook = async (book) => {

  };

  const deleteEquipment = async (equipment) => {

  };

  return (
    <Body>
      <Header/>
      <ManagerButtonSearchHolder
        isBookMode={isBookMode}
        onBookClick={onBookClick}
        onEquipmentClick={onEquipmentClick}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        onSearchPress={onSearchPress}
      />
      {isBookMode ? (
        <Box>
          <ManagerBookInfoTitle/>
          {rentees.map((book) => (
            <ManagerBookInfo key={book.id} book={book}
                             setIsEditMode={setIsEditMode}
                             setEditingRentee={setEditingRentee}
                             deleteBook={deleteBook}/>
          ))}
        </Box>
      ) : (
        <Box>
          <ManagerEquipmentInfoTitle/>
          {
            rentees.map((equipment) => (
              <ManagerEquipmentInfo key={equipment.id} equipment={equipment}
                                    setIsEditMode={setIsEditMode}
                                    setEditingRentee={setEditingRentee}
                                    deleteEquipment={deleteEquipment}/>
            ))
          }
        </Box>
      )}

      {isBookMode ? (
        <FormBox>
          <ManagerBookForm isEditMode={isEditMode} setIsEditMode={setIsEditMode}
                           editingRentee={editingRentee} setEditingRentee={setEditingRentee}
                           createBook={createBook} updateBook={updateBook}/>
        </FormBox>
      ) : (
        <FormBox>
          <ManagerEquipmentForm isEditMode={isEditMode} setIsEditMode={setIsEditMode}
                                editingData={editingRentee} setCorrectData={setEditingRentee}
                                createEquipment={createEquipment}
                                updateEquipment={updateEquipment}/>
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

export default Manager;
