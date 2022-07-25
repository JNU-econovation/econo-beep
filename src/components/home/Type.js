import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Type({ to, src, text }) {
  return (
    <Box>
      <Link to={to}>
        <Img src={src} />
        <Text>{text}</Text>
      </Link>
    </Box>
  );
}
const Box = styled.div`
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 3rem;
  margin-bottom: 1rem;
`;

const Text = styled.div`
  text-align: center;
  color: ${(props) => props.theme.firstGray};
  font-size: 0.9rem;
  font-weight: ${(props) => props.theme.fontWeightRegular};
`;

export default Type;
