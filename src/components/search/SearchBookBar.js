import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchBookBar() {
  return (
    <SearchBar placeholder="도서" searchApiUrl="search/books" />
  );
}

export default SearchBookBar;
