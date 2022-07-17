import React from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <p>copyright 어쩌구저쩌꾸</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100%;
  height: 10vh;
  
  padding: 1rem 1.5rem;
  
  background-color: #F6F6F7;
  color: ${(props) => props.theme.firstGray};
  
  font-size: 0.8rem;
`;

export default Footer;
