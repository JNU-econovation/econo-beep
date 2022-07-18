import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Banner({ to, bgColor, text, src }) {
  return (
    <Link to={to}>
      <Box bgColor={bgColor}>
        <Img src={src} />
        <Text> {text} </Text>
      </Box>
    </Link>
  );
}

const Box = styled.div`
  width: 100%;
  height: 12.5vh;
  
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 10vh;
  }
`;

const Img = styled.img``;

const Text = styled.div`
  color: ${(props) => props.theme.bgColor};
  font-size: 1rem;
  font-weight: 600;
  
  margin-left: 1rem;
`;

export default Banner;
