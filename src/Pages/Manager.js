import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import SearchAllBar from '../components/search/SearchAllBar';
// import { FiChevronDown } from 'react-icons/fi'
import { MenuItem, Select, FormControl } from '@mui/material';
import ManagerButtonSearchHolder from '../components/manager/ManagerButtonSearchHolder';

function Manager() {

  const [isActivated, setIsActivated] = useState(true);
  const [viewMethod, setViewMethod] = useState(0);

  const onBookClick = () => {
    setIsActivated(true);
  }

  const onEquipmentClick = () => {
    setIsActivated(false);
  }

  const onViewChange = (e) => {
    setViewMethod(e.target.value);
  }

  return (
    <Body>
      <Header />
      <ManagerButtonSearchHolder
        isActivated={isActivated}
        onBookClick={onBookClick}
        onEquipmentClick={onEquipmentClick}
        viewMethod={viewMethod}
        onViewChange={onViewChange}
      />
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  min-height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: ${(props) => props.theme.managerBgColor};
`;

export default Manager
