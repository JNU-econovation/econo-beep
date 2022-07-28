import styled from 'styled-components';

const ListBody = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  background-color: ${(props) => props.theme.bgColor};
`;

export default ListBody;
