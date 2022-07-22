import styled from 'styled-components';

const ContentTitle = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.black};
  margin: 0 5vw;
`;

export default ContentTitle;
