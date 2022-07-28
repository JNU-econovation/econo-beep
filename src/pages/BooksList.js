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
  const [lastBookId] = useState(null);
  const [bookList , setBookList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const getBookList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + 'book/list/all/', {
      params: {
        pageSize: 8,
        lastBookId: lastBookId
      }
    });

    const dataList = list.data
    setBookList((bookList) => [...bookList, ...dataList]);
  }

  const getKeywordList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + `book/search/`, {
      params: {
        keyword: searchParams.get('keyword')
      }
    });

    const dataList = list.data
    setBookList((bookList) => [...dataList])
  }

  const getTypeList = async () => {
    const list = await axios.get(process.env.REACT_APP_BEEP_API + 'book/list/' + searchParams.get('type'), {
      params: {
        type: searchParams.get('type'),
        pageSize: 8,
        lastBookId: lastBookId
      }
    });

    const dataList = list.data
    console.log(dataList);
    setBookList((bookList) => [...dataList])
  }

  useEffect(() => {
    // console.log(searchParams.get('keyword'));
    if (searchParams.get('keyword') === null) {
      getBookList();
    } else if (searchParams.get('keyword')) {
      getKeywordList();
    }

    if (searchParams.get('type')) {
      getTypeList();
    }

    console.log(searchParams.get('type'));
    // if (searchParams.get('type')) {
    //   getTypeList();
    // }
  }, [searchParams.get('keyword'), searchParams.get('type')]);

  return (
    <ListBody>
      <Header />
      <ListSearchBarHolder>
        <SearchBookBar />
      </ListSearchBarHolder>
      <ListResultBox>
        {bookList.map((item) => (
          <BookInfo
            key={item.id}
            to={item.id}
            src={process.env.REACT_APP_BEEP_API + item.bookCoverImageUrl}
            bookId={item.id}
            bookTitle={item.title}
            bookAuthorName={item.authorName}
            bookRent={item.rentState}
          />
        ))}
      </ListResultBox>
    </ListBody>
  );
}

export default BooksList;
