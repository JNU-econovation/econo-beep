import styled from 'styled-components';

const MoreRenteeButton = styled.button`
  width: 85vw;
  height: 5vh;
  
  margin: 5% 0;
  
  border: none;
  border-radius: 10px;
  
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.blue};
  background-color: ${(props) => props.theme.managerLightBlue};

  :hover {
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.blue};
  }
`;

export default MoreRenteeButton;
