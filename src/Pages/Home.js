import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

function Home() {
  return (
    <Body>
      <Header />
    </Body>
  );
}

const Body = styled.div`
  // Media 쿼리가 상당히 많음. 어디에 사용하는건지??
  // 높이르 제한할 필요가 있을끼? 그냥 내용물만큼 자동으로 늘어나게 해야 더 다형적이지 않을까?
  //@media screen and (max-width: 767px) {
  //  width: 100vw;
  //  height: 200vh;
  //}
  //@media screen and (min-width: 768px) {
  //  width: 100vw;
  //  height: 100vh;
  //}
`;

export default Home;
