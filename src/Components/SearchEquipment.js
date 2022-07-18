import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchEquipment() {
  return (
    <SearchBar placeholder="기자재" searchApiUrl="search/equipment" />
  );
}

export default SearchEquipment;
