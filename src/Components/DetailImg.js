import React from 'react';
import styled from 'styled-components';

function DetailImg({ src }) {
  return (
    <Img src={src} />
  );
}

const Img = styled.img`
  border-radius: 10px;
  object-fit: cover;

  width: 50%;
  max-width: 300px;
  
  margin-bottom: 1rem;
`;

export default DetailImg;
