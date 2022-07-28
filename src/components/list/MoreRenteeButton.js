import styled from 'styled-components';

const MoreRenteeButton = styled.button`
  width: 85vw;
  height: 5vh;
  
  max-width: 400px;
  
  margin: 5% 0;
  
  border: 1px solid ${(props) => props.theme.firstGray};
  border-radius: 10px;
  
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.firstGray};
  background-color: ${(props) => props.theme.bgColor};
  }
`;

export default MoreRenteeButton;
