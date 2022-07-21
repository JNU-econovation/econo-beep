import styled from 'styled-components';

const BookImg = styled.img`
  border-radius: 10px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    width: 25vw;
    height: 35vw;
  }

  @media screen and (min-width: 768px) {
    width: 105px;
    height: 150px;
  }
`;

export default BookImg;
