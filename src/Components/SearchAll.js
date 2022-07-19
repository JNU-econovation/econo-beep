import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchAll() {
  return (
    <SearchBar placeholder="검색" searchApiUrl="search/all" />
  );
}
export default SearchAll;
