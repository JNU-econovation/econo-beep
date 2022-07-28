import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Type({ to, src, text }) {
  return (
    <Link to={to}>
      <Box>
        <Img src={src} />
        <Text>{text}</Text>
      </Box>
    </Link>
  );
}
const Box = styled.div`
  margin-bottom: 2vh;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 3rem;
  height: 3rem;
  
  object-fit: contain;

  margin-bottom: 1.5vh;
`;

const Text = styled.div`
  text-align: center;
  color: ${(props) => props.theme.firstGray};
  font-size: 12px;
  font-weight: ${(props) => props.theme.fontWeightRegular};
`;

export default Type;
