import styled from 'styled-components';

const ContentTitle = styled.div`
  margin-left: 7.5vw;
  margin-bottom: 1.2rem;
  
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.black};
  
`;

export default ContentTitle;
