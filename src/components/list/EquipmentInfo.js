import React from 'react';
import { Link } from 'react-router-dom';
import InfoImg from './InfoImg';
import InfoText from './InfoText';
import InfoBox from './InfoBox';

function EquipmentInfo({ id, src, title, rentState }) {
  return (
    <Link to={`/rentee/${id}`}>
      <InfoBox>
        <InfoImg src={src} />
        <InfoText id={id} title={title} rent={rentState} />
      </InfoBox>
    </Link>
  );
}

export default EquipmentInfo;
