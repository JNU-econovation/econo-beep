import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // eslint-disable-next-line
      alert(keyword);
      /*
        fetch 후 filter 사용해서 검색 결과 가지고 오기
       */
      setKeyword('');
    }
  };

  return (
    <Box onKeyPress={onEnterPress}>
      <Icon>
        <BiSearch />
      </Icon>
      <Search type="text" placeholder="Search" value={keyword} onChange={onChange} />
    </Box>
  );
}

const Box = styled.form`
  height: 5vh;
  
  display: flex;
  align-items: center;
  
  border: 2px ${(props) => props.theme.blue} solid;
  border-radius: 20px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0px 5px 0px 10px;
  
  font-size: 1.5rem;
  color: ${(props) => props.theme.blue};
`;

const Search = styled.input`
  width: 80%;
  
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
