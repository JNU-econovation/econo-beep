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

// test를 위해 pageSize = 1로 진행
// 추후에 pageSize = 8로 변경할 것!

const pageSize = 1;

const idForSortOrder = [
  { isIdAsc: false, isIdDesc: true, isRecentRentDesc: false }, // 최근에 추가된 순
  { isIdAsc: true, isIdDesc: false, isRecentRentDesc: false }, // 이전에 추가된 순
  { isIdAsc: false, isIdDesc: false, isRecentRentDesc: true }, // 최근에 대여된 순
];

function Manager() {
  const [isBookMode, setIsBookMode] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(null);

  const [sortOrder, setSortOrder] = useState(0);
  const [editingRentee, setEditingRentee] = useState(null);

  const [rentees, setRentees] = useState([]);
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (isBookMode) {
      initListBook();
    } else {
      initListEquipment();
    }
  }, [isBookMode, sortOrder]);

  const onBookClick = () => {
    setSearchKeyword("");
    setIsBookMode(true);
    setLastRenteeId(null);
    setOffset(0);
  };

  const onEquipmentClick = () => {
    setSearchKeyword("");
    setIsBookMode(false);
    setLastRenteeId(null);
    setOffset(0);
  };

  const onSearchPress = () => {
    console.log(searchKeyword);
    setLastRenteeId(null);
    setOffset(null);
    if (isBookMode) {
      initSearchBooks();
    } else {
      initSearchEquipments();
    }
  };

  const initSearchBooks = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      console.log(response);
      setRentees(dataList);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      console.log(response);
      setRentees(dataList);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  }

  const loadSearchedBooks = async () => {

    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  };

  const initListBook = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          pageSize: pageSize,
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
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          pageSize: pageSize,
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
  }

  const loadListBook = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          pageSize: pageSize,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
        console.log(offset);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/book', {
        params: {
          pageSize: 8,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  }

  const initSearchEquipments = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      console.log(response);
      setRentees(dataList);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      console.log(response);
      setRentees(dataList);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  }

  const loadSearchEquipments = async () => {

    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          keyword: searchKeyword,
          pageSize: pageSize,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  };

  const initListEquipment = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          pageSize: pageSize,
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
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          pageSize: pageSize,
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
  }

  const loadListEquipment = async () => {
    if (idForSortOrder[sortOrder].isRecentRentDesc !== false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          pageSize: pageSize,
          offset: offset,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setOffset(offset + dataList.length);
        console.log(offset);
      }

    } else if (idForSortOrder[sortOrder].isRecentRentDesc === false) {
      const response = await axios.get(process.env.REACT_APP_BEEP_API + 'management/search/equipment', {
        params: {
          pageSize: 8,
          lastRenteeId: lastRenteeId,
          isIdAsc: idForSortOrder[sortOrder].isIdAsc,
          isIdDesc: idForSortOrder[sortOrder].isIdDesc,
          isRecentRentDesc: idForSortOrder[sortOrder].isRecentRentDesc,
        }
      });

      const dataList = response.data;
      setRentees(rentees => [...rentees, ...dataList]);
      if (dataList.length !== 0) {
        setLastRenteeId(dataList[dataList.length - 1].id);
      }
    }
  }

  const createBook = async (newBookForm) => {
    await axios.post(process.env.REACT_APP_BEEP_API + '/management/book', newBookForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (searchKeyword === true) {
      initSearchBooks();
    } else {
      initListBook();
    }
  };

  const createEquipment = async (newEquipmentForm) => {
    await axios.post(process.env.REACT_APP_BEEP_API + '/management/equipment', newEquipmentForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (searchKeyword === true) {
      initSearchEquipments();
    } else {
      initListEquipment();
    }
  };

  const updateBook = async (newBookForm, bookId) => {
    await axios.put(process.env.REACT_APP_BEEP_API + '/management/book/' + bookId, newBookForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (searchKeyword === true) {
      initSearchBooks();
    } else {
      initListBook();
    }
  };

  const updateEquipment = async (newEquipmentForm, equipmentId) => {
    await axios.put(process.env.REACT_APP_BEEP_API + '/management/equipment/' + equipmentId, newEquipmentForm, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (searchKeyword === true) {
      initSearchEquipments();
    } else {
      initListEquipment();
    }
  };

  const deleteBook = async (bookId) => {
    await axios.delete(process.env.REACT_APP_BEEP_API + '/management/book/' + bookId);
    if (searchKeyword === true) {
      initSearchBooks();
    } else {
      initListBook();
    }
  };

  const deleteEquipment = async (equipmentId) => {
    await axios.delete(process.env.REACT_APP_BEEP_API + '/management/equipment/' + equipmentId);
    if (searchKeyword === true) {
      initSearchEquipments();
    } else {
      initListEquipment();
    }
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
        setSearchKeyword={setSearchKeyword}
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
          { searchKeyword !== null ? (
            <LoadButton onClick={loadSearchedBooks}>검색 결과 더보기</LoadButton>
          ) : (
            <LoadButton onClick={loadListBook}>도서 더 보기</LoadButton>
          )}
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
            ))}
          { searchKeyword !== null ? (
            <LoadButton onClick={loadSearchEquipments}>검색 결과 더보기</LoadButton>
          ) : (
            <LoadButton onClick={loadListEquipment}>기자재 더 보기</LoadButton>
          )}
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
  position: fixed;
  bottom: 0;
`;

const LoadButton = styled.button`
  width: 85vw;
  height: 5vh;

  max-width: 400px;

  margin: 2vh 0 10vh 0;

  border: 1px solid ${(props) => props.theme.firstGray};
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.firstGray};
  background-color: ${(props) => props.theme.bgColor};
}
`;

export default Manager;
