import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import BookInfo from '../components/list/BookInfo';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import SearchTypeBar from '../components/search/SearchTypeBar';
import ListResultBox from '../components/list/ListResultBox';
import EquipmentInfo from '../components/list/EquipmentInfo';
import MoreRenteeButton from '../components/list/MoreRenteeButton';
import RENTEE_TYPE from '../components/constant/RENTEE_TYPE';

function TypesRenteeList() {
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [rentees , setRentees] = useState([]);

  const { to } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const initTypeList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/search/' + to, {
      params: {
        type: to,
        pageSize: 8
      }
    });
    const newBookList = response.data;

    if (newBookList.length !== 0) {
      setLastRenteeId(newBookList[newBookList.length - 1].id);
      setRentees(newBookList);
    }
  }

  const loadTypeList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/search/' + to, {
      params: {
        type: to,
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });
    const newBookList = response.data;

    if (newBookList.length !== 0) {
      setLastRenteeId(newBookList[newBookList.length - 1].id);
      setRentees(newBookList);
    }
  }

  const initSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/` + to, {
      params: {
        type: to,
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
  }

  const loadSearchList = async () => {
    const response = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/` + to, {
      params: {
        type: to,
        keyword: searchParams.get('keyword'),
        pageSize: 8,
        lastRenteeId: lastRenteeId
      }
    });
    const newSearchList = response.data;

    setRentees(newSearchList);

    if (newSearchList.length !== 0) {
      setLastRenteeId(newSearchList[newSearchList.length - 1].id);
      setRentees(newSearchList);
    }
  }

  useEffect(() => {
    if (searchParams.get('keyword') === null) {
      initTypeList();

    } else if (searchParams.get('keyword')) {
      initSearchList();
    }
  }, [searchParams.get('keyword')]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchTypeBar to={to}/>
      </ListSearchBarHolder>
      <ListResultBox>
        {rentees.map((item) => (
          item.type !== RENTEE_TYPE.EQUIPMENT ? (
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
        { searchParams.get('keyword') ? (
          <MoreRenteeButton onClick={loadSearchList}>MORE INFO</MoreRenteeButton>
        ) : (
          <MoreRenteeButton onClick={loadTypeList}>MORE INFO</MoreRenteeButton>
        )}
      </ListResultBox>
    </ListBody>
  );
}

export default TypesRenteeList;
