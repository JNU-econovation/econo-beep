import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <SearchBox onKeyPress={onEnterPress}>
      <Icon>
        <BiSearch />
      </Icon>
      <Search type="text" placeholder="|  Search" value={keyword} onChange={onChange} />
    </SearchBox>
  );
}

const SearchBox = styled.form`
  height: 5vh;
  width: 100%;
  
  display: flex;
  align-items: center;
  
  border: 1.5px ${(props) => props.theme.blue} solid;
  border-radius: 20px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0px 5px 0px 10px;
  
  font-size: 1.4rem;
  color: ${(props) => props.theme.blue};
`;

const Search = styled.input`
  width: 85%;
  margin: 5px 0px;
  padding: 0px;
  
  border: none;
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
  
  &:focus::placeholder{
    opacity: 0;
  }
`;

export default SearchBar;
