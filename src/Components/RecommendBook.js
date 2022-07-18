import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RecommendBook({ src, to }) {
  return (
    <Link to={to}>
      <Box>
        <BookImg src={src} />
      </Box>
    </Link>
  );
}

const BookImg = styled.img`
  width: 140px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  
  @media screen and (max-width: 767px) {
    width: 25vw;
    height: 35vw;
  }
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
`;

export default RecommendBook;
