import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    // 홈페이지로 url 이동시키는 onClick 이벤트 추가하기
    // https://reactrouter.com/docs/en/v6/routers/native-router
    // useNavigate, Link, etc...
    <Box>
      <h2>econoBeep</h2>
    </Box>
  );
}

const Box = styled.div`
  margin: 0 1rem;
  font-size: 1.5rem;
  
  // 로고를 누르면 홈페이지로 가는게 일반적이므로, 버튼처럼 보이게 하기위해 cursor 속성
  cursor: pointer;
`;

export default Logo;
