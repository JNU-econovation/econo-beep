import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RecommendBook({ src, to }) {
  return (
    <Link to={to}>
      <BookDiv>
        <BookImg src={src} />
      </BookDiv>
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

const BookDiv = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
`;

export default RecommendBook;
