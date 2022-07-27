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
  const [lastRenteeId, setLastRenteeId] = useState(0);
  const [renteeList , setRenteeList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getBookList = async (lastId) => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + '/rentee/list/book/', {
      params: {
        pageSize: 1,
        lastBookId: lastId
      }
    });
    const dataList = list.data
    const lastData = list.data.slice(-1);

    setRenteeList((renteeList) => [...renteeList, ...dataList]);
    setLastRenteeId(lastData[0].id);

    console.log(list);
    console.log(lastData[0].id);
    console.log(lastRenteeId);
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
      setRenteeList([]);
      getBookList();
    } else if (searchParams.get('keyword')) {
      setRenteeList([]);
      getKeywordList();
    }
  }, [searchParams.get('keyword')]);

  useEffect(() => {
    function onScroll(){
      if (window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 10) {
        console.log('맨 아래 도착');
        console.log(lastRenteeId);
        if (lastRenteeId !== 0) {
          if (searchParams.get('keyword') === null) {
            console.log(lastRenteeId);
            getBookList(lastRenteeId);
          } else {
            //키워드
          }
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('touchmove', onScroll)
    return() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('touchmove', onScroll);
    };
  }, [lastRenteeId])


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
