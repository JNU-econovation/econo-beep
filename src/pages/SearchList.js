import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookInfo from '../components/list/BookInfo';
import EquipmentInfo from '../components/list/EquipmentInfo'
import SearchAllBar from '../components/search/SearchBookBar';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import ListResultBox from '../components/list/ListResultBox';
import MoreRenteeButton from '../components/list/MoreRenteeButton';
import BOOK_TYPE_ICON from '../components/constant/BOOK_TYPE_ICON';
import axios from 'axios';

function SearchList() {
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [rentees, setRentees] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const initAllList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/all/', {
      params: {
        pageSize: 8,
      }
    });
    const newRenteeList = response.data;

    if (newRenteeList.length !== 0) {
      setLastRenteeId(newRenteeList[newRenteeList.length - 1].id);
      setRentees(newRenteeList);
    }
  };

  const loadAllList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/all/', {
      params: {
        pageSize: 8,
        lastRenteeId: lastRenteeId,
      }
    });
    const newRenteeList = response.data;

    if (newRenteeList.length !== 0) {
      setLastRenteeId(newRenteeList[newRenteeList.length - 1].id);
      setRentees((oldBookList) => [...oldBookList, ...newRenteeList]);
    }
  };

  const initSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/`, {
      params: {
        keyword: searchParams.get('keyword')
        // pageSize: 8
      }
    });

    const newRenteeList = response.data;

    setRentees(newRenteeList);

    if (newRenteeList.length !== 0) {
      setLastRenteeId(newRenteeList[newRenteeList.length - 1].id);
      setRentees(newRenteeList);
    }
  };

  const loadSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/`, {
      params: {
        keyword: searchParams.get('keyword')
        // lastRenteeId: lastRenteeId,
        // pageSize: 8
      }
    });

    const newRenteeList = response.data;

    if (newRenteeList.length !== 0) {
      setLastRenteeId(newRenteeList[newRenteeList.length - 1].id);
      setRentees((oldSearchList) => [...oldSearchList, ...newRenteeList]);
    }
  };

  useEffect(() => {
    if (searchParams.get('keyword') === "") {
      initAllList();

    } else if (searchParams.get('keyword')) {
      initSearchList();
    }
  }, [searchParams.get('keyword')]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchAllBar />
      </ListSearchBarHolder>
      <ListResultBox>
        {rentees.map((item) => (
          item.type !== BOOK_TYPE_ICON.EQUIPMENT.text ? (
            <BookInfo
              key={item.id}
              id={item.id}
              src={process.env.REACT_APP_BEEP_API + item.thumbnailUrl}
              title={item.title}
              authorName={item.authorName}
              rentState={item.rentState}
            />
          ) : (
            <EquipmentInfo
              key={item.id}
              id={item.id}
              src={process.env.REACT_APP_BEEP_API + item.thumbnailUrl}
              title={item.title}
              rentState={item.rentState}
            />
          )
        ))}
        { searchParams.get('keyword') !== "" ? (
          <MoreRenteeButton onClick={loadSearchList}>MORE INFO</MoreRenteeButton>
        ) : (
          <MoreRenteeButton onClick={loadAllList}>MORE INFO</MoreRenteeButton>
        )}
      </ListResultBox>
    </ListBody>
  );
}

export default SearchList;
