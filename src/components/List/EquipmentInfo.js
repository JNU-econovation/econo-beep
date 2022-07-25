import React from 'react';
import { Link } from 'react-router-dom';
import InfoImg from './InfoImg';
import InfoText from './InfoText';
import InfoBox from './InfoBox';

function EquipmentInfo({ to, src, equipmentId, equipmentName, equipmentRent }) {
  return (
    <Link to={to}>
      <InfoBox>
        <InfoImg src={src} />
        <InfoText id={equipmentId} title={equipmentName} rent={equipmentRent} />
      </InfoBox>
    </Link>
  );
}

export default EquipmentInfo;
