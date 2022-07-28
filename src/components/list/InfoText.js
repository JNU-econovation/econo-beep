import React from 'react';
import styled from 'styled-components';
import RENT_STATE from '../constant/RENT_STATE';

function InfoText({ id, title, authorName, rent }) {
  return (
    <TextBox>
      <ItemInfo>
        <Id>{id}</Id>
        <Title>{title}</Title>
        {authorName ? (<AuthorName>{authorName}</AuthorName>) : null}
      </ItemInfo>
      { rent === RENT_STATE.RENTED ? <RentInfoRed>반납하기</RentInfoRed> : null }
      { rent === RENT_STATE.RENTABLE ? <RentInfoBlue>대여하기</RentInfoBlue> : null }
      { rent === RENT_STATE.UNRENTABLE ? <RentInfoGray>대여 불가</RentInfoGray> : null }
    </TextBox>
  );
}

const ItemInfo = styled.div`
  width: 100%;
  margin-bottom: 20%;
  text-align: left;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 50%;
  height: 100%;
  margin-left: 1rem;
`;

const Id = styled.div`
  font-size: 0.3rem;
  
  color: ${(props) => props.theme.secondGray};
`;

const Title = styled.div`
  font-size: 1rem;
  padding: 0.3rem 0;
  
  color: ${(props) => props.theme.black};
`;

const AuthorName = styled.div`
  font-size: 0.8rem;
  
  color: ${(props) => props.theme.firstGray};
`;

const RentInfo = styled.div`
  width: 100%;
  text-align: right;
  font-size: 0.8rem;
  
  font-weight: 500;
`;

const RentInfoRed = styled(RentInfo)`
  color: ${(props) => props.theme.rentRed};
`;

const RentInfoBlue = styled(RentInfo)`
  color: ${(props) => props.theme.rentBlue};
`;

const RentInfoGray = styled(RentInfo)`
  color: ${(props) => props.theme.rentGray};
`;

export default InfoText;
