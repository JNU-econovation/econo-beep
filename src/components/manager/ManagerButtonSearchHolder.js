import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import styled from 'styled-components';
import SearchManagerBar from '../search/SearchManagerBar';

function ManagerButtonSearchHolder({ isBookActivated, onBookClick, onEquipmentClick, viewMethod, onViewChange}) {
  return (
    <ButtonSearchHolder>
      <Button state={isBookActivated} onClick={onBookClick}>도서</Button>
      <Button state={!isBookActivated} onClick={onEquipmentClick}>기자재</Button>
      <SelectBox>
        <FormControl fullWidth size="small">
          <Select
            labelId="SelectViewMethod"
            id="Select"
            value={viewMethod}
            onChange={onViewChange}
          >
            <MenuItem value={0}>최근에 추가된 순</MenuItem>
            <MenuItem value={1}>이전에 추가된 순</MenuItem>
            <MenuItem value={2}>최근에 대여된 순</MenuItem>
          </Select>
        </FormControl>
      </SelectBox>
      <ManagerSearchBarHolder>
        <SearchManagerBar isBookActivated={isBookActivated} />
      </ManagerSearchBarHolder>
    </ButtonSearchHolder>
  )
}

const ButtonSearchHolder = styled.div`
  width: 90%;
  height: 42px;
  
  margin: 2.5%;
  padding: 0;
  
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 10%;
  height: 100%;
  
  text-align: center;
  
  margin: 0 1vw;
  padding: 0;
  
  border: none;
  border-radius: 20px;
  
  font-size: 1.2rem;
  font-weight: 600;
  
  color: ${ props => props.state === true ? "#FDFDFD" : "#001AFF"};
  background-color: ${ props => props.state === true ? "#001AFF" : "#CACFFF"};
`;

const SelectBox = styled.div`
  width: 20%;
  height: 100%;
  
  padding: 0 1vw;
`;

const ManagerSearchBarHolder = styled.div`
  width: 60%;
  height: 100%;
  
  margin: 0 1vw;
`;

export default ManagerButtonSearchHolder;
