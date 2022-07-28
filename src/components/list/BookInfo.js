import React from 'react';
import { Link } from 'react-router-dom';
import InfoImg from './InfoImg';
import InfoBox from './InfoBox';
import InfoText from './InfoText';

function BookInfo({ src, id, title, authorName, rentState }) {
  return (
    <Link to={`/rentee/${id}`}>
      <InfoBox>
        <InfoImg src={src} />
        <InfoText id={id} title={title} authorName={authorName} rent={rentState} />
      </InfoBox>
    </Link>
  );
}

export default BookInfo;
