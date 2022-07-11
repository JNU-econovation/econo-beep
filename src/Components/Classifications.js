import React from 'react';
import styled from 'styled-components';
import Class from './Class';

function Classifications() {
  return (
    <Box>
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
      <Class src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" to="/react" text="React" />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  position: absolute;
  top: 60vh;
  left: 5vw;
  

 width: 90vw;
`;

export default Classifications;
