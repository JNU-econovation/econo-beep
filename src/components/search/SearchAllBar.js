import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchAllBar() {
  return (
    <SearchBar placeholder="검색" searchApiUrl="search/all" />
  );
}
export default SearchAllBar;
