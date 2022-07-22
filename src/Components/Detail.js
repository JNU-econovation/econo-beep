import styled from 'styled-components';

const Detail = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
  
  border-radius: 30px;
`;

export default Detail;
