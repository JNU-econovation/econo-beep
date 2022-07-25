import React from 'react';
import { Link } from 'react-router-dom';
import InfoImg from './InfoImg';
import InfoBox from './InfoBox';
import InfoText from './InfoText';

function BookInfo({ to, src, bookId, bookTitle, bookAuthorName, bookRent }) {
  return (
    <Link to={`/book/${to}`}>
      <InfoBox>
        <InfoImg src={src} />
        <InfoText id={bookId} title={bookTitle} authorName={bookAuthorName} rent={bookRent} />
      </InfoBox>
    </Link>
  );
}

export default BookInfo;
