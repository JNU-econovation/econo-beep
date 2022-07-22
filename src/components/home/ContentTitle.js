import styled from 'styled-components';

const ContentTitle = styled.div`
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeightBold};
  color: ${(props) => props.theme.black};
  margin: 0 5vw;
  
  @media screen and (max-width: 767px) {
    width: 90vw;
  }
  
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export default ContentTitle;
