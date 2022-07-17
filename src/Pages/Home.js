import React from 'react';
import styled from 'styled-components';
import SearchAll from '../Components/SearchAll';
import SearchBook from '../Components/SearchBook';
import SearchEquipment from '../Components/SearchEquipment';

function Home() {
  return (
    <Body>
      <SearchAll />
      <SearchBook />
      <SearchEquipment />
    </Body>
  );
}

const Body = styled.div`
`;

export default Home;
