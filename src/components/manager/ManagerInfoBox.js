import styled from 'styled-components';

const ManagerInfoBox = styled.button`
  width: 100%;
  height: 5vh;
  
  margin: 0.25% 0;
  
  display: flex;
  align-items: center;
  
  border-radius: 10px;
  border: none;
  
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
  
  color: ${(props) => props.theme.firstGray};
  font-size: 0.8rem;
  
  
  :hover {
    box-shadow: 0 5px 20px 4px rgba(0, 0, 0, 0.06);
    transform: scale(1.015);
    transition: .17s;
  }
`;

export default ManagerInfoBox;
