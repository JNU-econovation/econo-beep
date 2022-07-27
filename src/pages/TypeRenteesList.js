import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import BookInfo from '../components/list/BookInfo';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import SearchTypeBar from '../components/search/SearchTypeBar';
import ListResultBox from '../components/list/ListResultBox';
import BOOK_TYPE_ICON from '../components/constant/BOOK_TYPE_ICON';
import EquipmentInfo from '../components/list/EquipmentInfo';

function TypesRenteeList() {
  const { to } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [renteeList , setRenteeList] = useState([]);

  const getKeywordList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/` + to, {
      params: {
        type: to,
        keyword: searchParams.get('keyword')
      }
    });
    console.log('getKeywordList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...dataList])
  }

  const getTypeList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/' + to, {
      params: {
        type: to,
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });
    console.log('getTypeList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...dataList])
  }

  useEffect(() => {
    console.log(to);
    if (searchParams.get('keyword') === null) {
      getTypeList();
    } else if (searchParams.get('keyword')) {
      getKeywordList();
    }
  }, [searchParams.get('keyword'), to]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchTypeBar to={to}/>
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

export default TypesRenteeList;
