import styled from 'styled-components';

const BookImg = styled.img`
  width: 140px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  
  @media screen and (max-width: 767px) {
    width: 25vw;
    height: 35vw;
  }
`;

export default BookImg;
