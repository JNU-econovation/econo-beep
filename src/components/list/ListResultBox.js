import styled from 'styled-components';

const ListResultBox = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ListResultBox;
