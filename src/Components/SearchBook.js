import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchBook() {
  return (
    <SearchBar placeholder="도서" searchFor="search/book" />
  );
}

export default SearchBook;
