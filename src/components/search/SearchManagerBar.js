import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import axios from 'axios';

function SearchManagerBar({ isBookActivated, setBookList }) {
  const [keyword, setKeyword] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onEnterPress = (event) => {
    if (event.key === 'Enter') {
      // event.preventDefault();
      // navigate({
      //   pathname: `/${searchApiUrl}`,
      //   search: `?keyword=${keyword}`
      // });
      setIsEnterPressed(true);
    }
  };

  const getKeyword = async () => {
    const list = await axios.get();
    const dataList = list.data

    setBookList([...dataList]);
  }

  useEffect(() => {
    getKeyword();
    console.log("키워드 가져오기" + keyword)
  }, [isEnterPressed])

  return (
    <SearchBox onKeyPress={onEnterPress}>
      <Icon>
        <BiSearch />
      </Icon>
      <Search type="text" placeholder={isBookActivated ? "도서" : "기자재"} value={keyword} onChange={onChange} />
    </SearchBox>
  );
}

const SearchBox = styled.form`
  height: 42px;
  width: 100%;

  display: flex;
  align-items: center;

  border-radius: 20px;
  
  background-color: ${(props) => props.theme.bgColor};
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0px 0px 0px 15px;

  font-size: 1.5rem;
color: #7280FF`;

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

export default SearchManagerBar;
