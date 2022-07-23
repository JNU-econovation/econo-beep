import React from 'react';
import styled from 'styled-components';

function Banner({ href, bgColor, text, src }) {
  return (
    <a href={href}>
      <Box bgColor={bgColor}>
        <Img src={src} />
        <Text> {text} </Text>
      </Box>
    </a>
  );
}

const Box = styled.div`
  width: 100%;
  height: 12.5vh;
  
  background-color: ${(props) => props.bgColor};
  border-radius: 20px;
  
  display: flex;
  align-items: center;
`;

const Img = styled.img``;

const Text = styled.div`
  color: ${(props) => props.theme.bgColor};
  font-size: 1rem;
  font-weight: 500;
  
  margin-left: 1rem;
`;

export default Banner;
