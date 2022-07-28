import React from 'react';
import SearchBar from './SearchBar';

function SearchTypeBar({ to }) {
  return (
    <SearchBar placeholder={to} searchApiUrl={"type/" + to} />
  );
}

export default SearchTypeBar;
