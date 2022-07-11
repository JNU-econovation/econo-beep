import React from 'react';
import styled from 'styled-components';

function Banner({
  href, bgColor, text, src,
}) {
  return (
    <Link href={href}>
      <Box bgColor={bgColor}>
        <Img src={src} />
        <Text text={text}> {text} </Text>
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

const Link = styled.a`
  text-decoration-line: none;
  
  :visited {
    color: ${(props) => props.theme.bgColor};
  }
`;

const Img = styled.img``;

const Text = styled.h1`
  color: ${(props) => props.theme.bgColor};
  font-size: 1rem;
  
  margin-left: 1rem;
`;

export default Banner;
