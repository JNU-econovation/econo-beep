import React from 'react';
// import styled from 'styled-components';
import HeaderMobile from './HeaderMobile';
import HeaderPc from './HeaderPc';

function Header() {
  return (
    <div>
      <HeaderMobile />
      <HeaderPc />
    </div>
  );
}

export default Header;
