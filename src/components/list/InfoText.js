import React from 'react';
import styled from 'styled-components';

function InfoText({ id, title, authorName, rent }) {
  return (
    <TextBox>
      <ItemInfo>
        <Id>{id}</Id>
        <Title>{title}</Title>
        {authorName ? (<AuthorName>{authorName}</AuthorName>) : null}
      </ItemInfo>
      <RentInfo>{rent}</RentInfo>
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
`;

export default InfoText;
