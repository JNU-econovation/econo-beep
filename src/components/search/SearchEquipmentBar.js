import React from 'react-router-dom';
import SearchBar from './SearchBar';

function SearchEquipmentBar() {
  return (
    <SearchBar placeholder="기자재" searchApiUrl="search/equipments" />
  );
}

export default SearchEquipmentBar;
