import React from 'react';
import styled from 'styled-components';

function Circle({ numberLength }) {

  const coloredCircle = () => {
    const circleResult = []
    for (let i = 0; i < numberLength; i++) {
      circleResult.push(<BlueCircle key={i}>●</BlueCircle>);
    }
    for (let i = numberLength; i < 4; i++) {
      circleResult.push(<GrayCircle key={i}>●</GrayCircle>);
    }
    return circleResult;
  }

  return (
    <CircleBox>
      {coloredCircle()}
    </CircleBox>
  );
}

const CircleBox = styled.div`
  margin: 1rem 0;
  display: flex;
`;

const GrayCircle = styled.div`
  margin: 1rem;
  color: ${(props) => props.theme.firstGray}
`;

const BlueCircle = styled(GrayCircle)`
  color: ${(props) => props.theme.blue};
`;

export default Circle;
