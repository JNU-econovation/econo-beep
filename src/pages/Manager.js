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

const idForSortOrder = [
  { isIdAsc: false, isIdDesc: true, isRecentRentDesc: false }, // 최근에 추가된 순
  { isIdAsc: true, isIdDesc: false, isRecentRentDesc: false }, // 이전에 추가된 순
  { isIdAsc: false, isIdDesc: false, isRecentRentDesc: true }, // 최근에 대여된 순
];

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const [sortOrder, setSortOrder] = useState(0);
  const [editingRentee, setEditingRentee] = useState(null);

  const [rentees, setRentees] = useState([]);
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isBookMode) {
      getListedBooks();
    } else {
      getListedEquipments();
    }
  }, [isBookMode, sortOrder]);

  const onBookClick = () => {
    setIsSearch(false);
    setIsBookMode(true);
    setLastRenteeId(null);
    setOffset(0);
  };

  const onEquipmentClick = () => {
    setIsSearch(false);
    setIsBookMode(false);
    setLastRenteeId(null);
    setOffset(0);
  };

  const onSearchPress = async (keyword) => {
    setIsSearch(true);
    if (isBookMode) {
      getSearchedBooks(keyword);
    } else {
      getSearchedEquipments(keyword);
    }
  };

  const getSearchedBooks = async (keyword) => {
    console.log(keyword);

    axios({
      url: process.env.REACT_APP_BEEP_API + '/management/search/book',
      method: 'GET',
      params: {
        keyword: 'j',
        pageSize: 8,
        lastRenteeId: lastRenteeId,
        isIdAsc: idForSortOrder[sortOrder].isIdAsc,
        isIdDesc: idForSortOrder[sortOrder].isIdDesc,
        isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
      }
    })
      .then((res) => {
        console.log(res);
        setRentees(res.data);
        if (res.data.length !== 0) {
          setLastRenteeId(res.data[res.data.length - 1].id);
        }
      });

    // if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
    //   const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/book', {
    //     params: {
    //       keyword: keyword,
    //       pageSize: 8,
    //       offset: offset,
    //       isIdAsc: idForSortOrder[sortOrder].isIdAsc,
    //       isIdDesc: idForSortOrder[sortOrder].isIdDesc,
    //       isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
    //     }
    //   });
    //
    //   const dataList = response.data;
    //   console.log(response);
    //   setRentees(dataList);
    //   if (dataList.length !== 0) {
    //     setOffset(offset + dataList.length);
    //     console.log(offset);
    //   }
    //
    // } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
    //   const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/book', {
    //     params: {
    //       keyword: keyword,
    //       pageSize: 8,
    //       lastRenteeId: lastRenteeId,
    //       isIdAsc: idForSortOrder[sortOrder].isIdAsc,
    //       isIdDesc: idForSortOrder[sortOrder].isIdDesc,
    //       isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
    //     }
    //   });
    //
    //   const dataList = response.data;
    //   console.log(response);
    //   setRentees(dataList);
    //   if (dataList.length !== 0) {
    //     setLastRenteeId(dataList[dataList.length - 1].id);
    //   }
    // }
  };

  const getSearchedEquipments = async (keyword) => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/equipment', {
        params: {
          keyword: keyword,
          pageSize: 8,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
        console.log(offset);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/equipment', {
        params: {
          keyword: keyword,
          pageSize: 8,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  };

  const getListedBooks = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/book', {
        params: {
          pageSize: 8,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
        console.log(offset);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/book', {
        params: {
          pageSize: 8,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  };

  const getListedEquipments = async () => {

    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/equipment', {
        params: {
          pageSize: 8,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
        console.log(offset);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + '/management/search/equipment', {
        params: {
          pageSize: 8,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(dataList);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  };

  const createBook = async (newBookForm) => {
    await axios.post(process.env.REACT_APP_BEEP_API + '/management/book', newBookForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (isSearch === true) {
      getSearchedBooks();
    } else {
      getListedBooks();
    }
  };

  const createEquipment = async (newEquipmentForm) => {
    await axios.post(process.env.REACT_APP_BEEP_API + '/management/equipment', newEquipmentForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (isSearch === true) {
      getSearchedBooks();
    } else {
      getListedBooks();
    }
  };

  const updateBook = async (newBookForm, bookId) => {
    await axios.put(process.env.REACT_APP_BEEP_API + '/management/book/' + bookId, newBookForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (isSearch === true) {
      getSearchedBooks();
    } else {
      getListedBooks();
    }
  };

  const updateEquipment = async (newEquipmentForm, equipmentId) => {
    await axios.put(process.env.REACT_APP_BEEP_API + '/management/equipment/' + equipmentId, newEquipmentForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  const deleteBook = async (bookId) => {
    await axios.delete(process.env.REACT_APP_BEEP_API + '/management/book/' + bookId);
  };

  const deleteEquipment = async (equipmentId) => {
    await axios.delete(process.env.REACT_APP_BEEP_API + '/management/equipment/' + equipmentId);
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
        setLastRenteeId={setLastRenteeId}
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
                                editingRentee={editingRentee} setEditingRentee={setEditingRentee}
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
