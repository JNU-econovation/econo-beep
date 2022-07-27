import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import BookInfo from '../components/list/BookInfo';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import ListResultBox from '../components/list/ListResultBox';
import BOOK_TYPE_ICON from '../components/constant/BOOK_TYPE_ICON';
import EquipmentInfo from '../components/list/EquipmentInfo';
import SearchAllBar from '../components/search/SearchAllBar';

function SearchList() {
  const { to } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [renteeList , setRenteeList] = useState([]);

  const getKeywordList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/`, {
      params: {
        keyword: searchParams.get('keyword')
      }
    });
    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList, ...dataList])
  }

  const getAllList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/all', {
      params: {
        pageSize: 8,
        lastRenteeId: lastRenteeId
      }
    });
    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList, ...dataList])
  }

  useEffect(() => {
    console.log(searchParams);
    if (searchParams.get('keyword')) {
      setRenteeList([]);
      getKeywordList();
    } else {
      setRenteeList([]);
      getAllList()
    }
  }, [searchParams.get('keyword')]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchAllBar />
      </ListSearchBarHolder>
      <ListResultBox>
        {renteeList.map((item) => (
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
      </ListResultBox>
    </ListBody>
  );
}

export default SearchList;
