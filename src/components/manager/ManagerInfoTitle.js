import styled from 'styled-components';

const InfoTitle = styled.div`
  width: 80%;
  height: 4vh;
  
  display: flex;
  align-items: center;
  
  margin: 0 0 2% 0;
  
  border-radius: 15px;
  color: ${(props) => props.theme.black};
  font-size: 0.8rem;
  
  background-color: ${(props) => props.theme.managerGray};
  box-shadow: ${(props) => props.theme.managerBoxShadow};
`;

export default InfoTitle;
