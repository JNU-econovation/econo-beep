import React, { useEffect, useState } from 'react';
import BookInfo from '../components/list/BookInfo';
import SearchBookBar from '../components/search/SearchBookBar';
import Header from '../components/header/Header';
import ListBody from '../components/list/ListBody';
import ListSearchBarHolder from '../components/list/ListSearchBarHolder';
import ListResultBox from '../components/list/ListResultBox';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

function BooksList() {
  const [lastRenteeId, setLastRenteeId] = useState(null);
  const [renteeList , setRenteeList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getBookList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/book/', {
      params: {
        pageSize: 8,
        lastBookId: lastRenteeId
      }
    });
    console.log('getBookList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList, ...dataList]);
  }

  const getKeywordList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + `/rentee/search/book`, {
      params: {
        keyword: searchParams.get('keyword')
      }
    });
    console.log('getKeywordList');
    console.log(list);

    const dataList = list.data
    setRenteeList((renteeList) => [...renteeList,...dataList])
  }


  useEffect(() => {
    if (searchParams.get('keyword') === null) {
      getBookList();
    } else if (searchParams.get('keyword')) {
      getKeywordList();
    }
  }, [searchParams.get('keyword')]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchBookBar />
      </ListSearchBarHolder>
      <ListResultBox>
        {renteeList.map((item) => (
          <BookInfo
            key={item.id}
            id={item.id}
            src={process.env.REACT_APP_BEEP_API + item.thumbnailUrl}
            title={item.title}
            authorName={item.authorName}
            rentState={item.rentState}
          />
        ))}
      </ListResultBox>
    </ListBody>
  );
}

export default BooksList;
