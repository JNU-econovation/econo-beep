import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function SearchBar({ placeholder, searchApiUrl }) {
  const [inputKeyword, setInputKeyword] = useState('');

  const navigate = useNavigate();

  const onChange = (event) => {
    setInputKeyword(event.target.value);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const keyword = inputKeyword.replace(/(\s*)/g, "");
      navigate({
        pathname: `/${searchApiUrl}`,
        search: `?keyword=${keyword}`
      });
      setInputKeyword('');
    }
  };

  return (
    <SearchBox onKeyPress={onEnterPress}>
      <Icon>
        <BiSearch />
      </Icon>
      <Search type="text" placeholder={placeholder} value={inputKeyword} onChange={onChange} />
    </SearchBox>
  );
}

const SearchBox = styled.form`
  height: 42px;
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

  margin: 0px 0px 0px 15px;

  font-size: 1.5rem;
  color: ${(props) => props.theme.blue};
`;

const Search = styled.input`
  width: 85%;
  margin: 5px 8px;
  padding: 0 0 0 10px;

  border: none;
  border-left: 2px solid #C8C8C8;

  font-size: 0.9rem;
  color: ${(props) => props.theme.black};

  &:focus {
    outline: none;
  }

  &:focus::placeholder{
    opacity: 0;
  }
`;

export default SearchBar;
