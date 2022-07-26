import React from 'react';
import styled from 'styled-components';

function RentBox({ rent }) {
  if (rent.length === 0) {
    return (
      <RentInfo>
        <TitleBox>
          <Title>이름</Title>
          <Title>대여일</Title>
          <Title>반납일</Title>
        </TitleBox>
      </RentInfo>)
  } else {

    const epochSecondToDate = (e) => {
      let date = new Date(e * 1000);

      return (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate());
    }

    return (
      <RentInfo>
        <TitleBox>
          <Title>이름</Title>
          <Title>대여일</Title>
          <Title>반납일</Title>
        </TitleBox>

        { rent.map((item) => (
          <RentHistoryRow>
            <Text>{item.renterName}</Text>
            <Text>{epochSecondToDate(item.rentalEpochSecond)}</Text>
            { item.returnEpochSecond ? <Text>{epochSecondToDate(item.returnEpochSecond)}</Text> : <Text />}
          </RentHistoryRow>
        )) }
      </RentInfo>
    );
  }
}

const RentInfo = styled.div`
  width: 90%;
  margin: 1rem 0;
  
  font-size: 0.9rem;
`;

const TitleBox = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 33.3%;
  text-align: center;
  
  font-weight: 600;
  color: ${(props) => props.theme.black};
`;

const RentHistoryRow = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  width: 33.3%;
  margin: 0.5rem 0;
  text-align: center;
  
  color: ${(props) => props.theme.firstGray};
`;

export default RentBox;
