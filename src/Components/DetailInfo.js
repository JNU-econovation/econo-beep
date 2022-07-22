import React from 'react';
import styled from 'styled-components';

function DetailInfo({ author, publisher, publicationDay }) {
  return (
    <DetailInfoBox>
      <TitleBox>
        <Title>저자</Title>
        <Title>출판사</Title>
      </TitleBox>
      <TextBox>
        <AuthorText>{author}</AuthorText>
        <PublisherText>
          <Publisher>{publisher}</Publisher>
          <PublicationDay>{publicationDay}</PublicationDay>
        </PublisherText>
      </TextBox>
    </DetailInfoBox>
  );
}

const DetailInfoBox = styled.div`
  width: 80%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  margin: 1rem 0;
  
  font-size: 0.9rem;
  color: ${(props) => props.theme.black};
`;

const TitleBox = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 50%;
  margin-bottom: 0.8rem;
  
  text-align: center;
  font-weight: 600;
`;

const AuthorText = styled.div`
  width: 50%;
  padding: 0 0.5rem;
  
  text-align: center;
`;

const PublisherText = styled(AuthorText)`
  border-left: 1px solid ${(props) => props.theme.borderGray};
`;

const Publisher = styled.div`
  margin: 0.2rem 0;
`;

const PublicationDay = styled.div`
  font-size: 0.7rem;
`;
export default DetailInfo;
