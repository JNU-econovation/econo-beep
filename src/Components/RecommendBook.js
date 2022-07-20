import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookImg from './BookImg';

function RecommendBook({ src, to }) {
  return (
    <Link to={to}>
      <Box>
        <BookImg src={src} />
      </Box>
    </Link>
  );
}

const Box = styled.div`
  display: grid;
  place-items: center;
  margin: auto;
`;

export default RecommendBook;
