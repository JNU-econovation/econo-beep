import React from 'react';
import EquipmentInfo from '../components/list/EquipmentInfo';
import ListBody from '../components/list/ListBody';
import Header from '../components/header/Header';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import SearchEquipmentBar from '../components/search/SearchEquipmentBar';
import ListResultBox from '../components/list/ListResultBox';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function EquipmentList() {
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [renteeList , setRenteeList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getEquipmentList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/equipment/', {
      params: {
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });
    console.log('getEquipmentList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList, ...dataList]);
  }

  const getKeywordList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/equipment`, {
      params: {
        keyword: searchParams.get('keyword')
      }
    });
    console.log('getKeywordList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList, ...dataList])
  }


  useEffect(() => {
    if (searchParams.get('keyword') === null) {
      getEquipmentList();
    } else if (searchParams.get('keyword')) {
      getKeywordList();
    }
  }, [searchParams.get('keyword')]);


  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchEquipmentBar />
      </ListSearchBarHolder>
      <ListResultBox>
        {renteeList.map((item) => (
          <EquipmentInfo
            key={item.id}
            id={item.id}
            src={process.env.REACT_APP_BEEP_API + item.thumbnailUrl}
            title={item.title}
            rentState={item.rentState}
          />
        ))}
      </ListResultBox>
    </ListBody>
  );
}

export default EquipmentList;
