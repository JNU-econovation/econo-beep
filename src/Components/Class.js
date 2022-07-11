import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Class({ to, src, text }) {
  return (
    <Box to={to}>
      <Img src={src} />
      <Text>{text}</Text>
    </Box>
  );
}

const Box = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  text-decoration: none;
  
  margin: 1rem;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 5vh;
  margin: 0.5rem;
`;

const Text = styled.h3`
  text-align: center;
  color: ${(props) => props.theme.firstGray};
  font-size: 1rem;
`;

export default Class;
