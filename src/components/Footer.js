import React from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterBox>
      <p>ⓒ ECONOVATION Management Dpt.</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100vw;
  height: 10vh;
  
  position: absolute;
  bottom: 0;
  
  margin-top: 10px;
  padding: 1.5rem;
  
  color: ${(props) => props.theme.firstGray};
  border-top: 1px solid ${(props) => props.theme.borderGray};
  
  font-size: 0.8rem;
`;

export default Footer;
