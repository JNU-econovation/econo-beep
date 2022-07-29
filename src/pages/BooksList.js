import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookInfo from '../components/list/BookInfo';
import SearchBookBar from '../components/search/SearchBookBar';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import ListResultBox from '../components/list/ListResultBox';
import MoreRenteeButton from '../components/list/MoreRenteeButton';
import axios from 'axios';


function BooksList() {
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [rentees, setRentees] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const initBookList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/search/book/', {
      params: {
        pageSize: 8,
      }
    });
    const newBookList = response.data;

    if (newBookList.length !== 0) {
      setLastRenteeId(newBookList[newBookList.length - 1].id);
      setRentees(newBookList);
    }
  };

  const loadBookList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/search/book/', {
      params: {
        pageSize: 8,
        lastRenteeId: lastRenteeId,
      }
    });
    const newBookList = response.data;

    if (newBookList.length !== 0) {
      setLastRenteeId(newBookList[newBookList.length - 1].id);
      setRentees((oldBookList) => [...oldBookList, ...newBookList]);
    }
  };

  const initSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/book`, {
      params: {
        keyword: searchParams.get('keyword'),
        pageSize: 8
      }
    });

    const newSearchList = response.data;

    setRentees(newSearchList);

    if (newSearchList.length !== 0) {
      setLastRenteeId(newSearchList[newSearchList.length - 1].id);
      setRentees(newSearchList);
    }
  };

  const loadSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/book`, {
      params: {
        keyword: searchParams.get('keyword'),
        lastRenteeId: lastRenteeId,
        pageSize: 8
      }
    });

    const newSearchList = response.data;

    if (newSearchList.length !== 0) {
      setLastRenteeId(newSearchList[newSearchList.length - 1].id);
      setRentees((oldSearchList) => [...oldSearchList, ...newSearchList]);
    }
  };

  useEffect(() => {
    if (searchParams.get('keyword') === null) {
      initBookList();

    } else if (searchParams.get('keyword')) {
      initSearchList();
    }
  }, [searchParams.get('keyword')]);

  return (
    <ListBody>
      <Header/>
      <ListSearchBarHolder>
        <SearchBookBar/>
      </ListSearchBarHolder>
      <ListResultBox>
        {rentees.map((item) => (
          <BookInfo
            key={item.id}
            id={item.id}
            src={process.env.REACT_APP_BEEP_API + item.thumbnailUrl}
            title={item.title}
            authorName={item.authorName}
            rentState={item.rentState}
          />
        ))}
        { searchParams.get('keyword') ? (
          <MoreRenteeButton onClick={loadSearchList}>검색 결과 더 보기</MoreRenteeButton>
        ) : (
          <MoreRenteeButton onClick={loadBookList}>도서 더 보기</MoreRenteeButton>
        )}
      </ListResultBox>
    </ListBody>
  );
}

export default BooksList;
