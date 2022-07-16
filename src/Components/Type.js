import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Type({ to, src, text }) {
  return (
    <StyledLink to={to}>
      <Img src={src} />
      <Text>{text}</Text>
    </StyledLink>
  );
}
const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin: 1rem;

  text-decoration: none;
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
  font-size: 1rem;
`;

export default Type;
