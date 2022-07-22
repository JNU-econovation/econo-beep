import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookImg from './BookImg';

function BookInfoList({ src, bookId, bookTitle, bookAuthorName, bookRent }) {
  return (
    <Link to={`/book/${bookId}`}>
      <BookBox>
        <BookImg src={src} />
        <TextBox>
          <BookInformation>
            <BookId>{bookId}</BookId>
            <BookTitle>{bookTitle}</BookTitle>
            <BookAuthorName>{bookAuthorName}</BookAuthorName>
          </BookInformation>
          <RentInformation>{bookRent}</RentInformation>
        </TextBox>
      </BookBox>
    </Link>
  );
}

const BookBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85vw;
  max-width: 900px;

  padding: 1rem 0;

  border-bottom: 0.2px solid darkgray;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 100%;
  margin-left: 1rem;
`;

const BookInformation = styled.div`
  width: 100%;
  margin-bottom: 20%;
  text-align: left;
`;

const RentInformation = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;
`;

const BookId = styled.div`
  font-size: 0.3rem;

  color: ${(props) => props.theme.secondGray};
`;

const BookTitle = styled.div`
  font-size: 1rem;
  padding: 0.3rem 0;

  color: ${(props) => props.theme.black};
`;

const BookAuthorName = styled.div`
  font-size: 0.8rem;

  color: ${(props) => props.theme.firstGray};
`;

export default BookInfoList;
