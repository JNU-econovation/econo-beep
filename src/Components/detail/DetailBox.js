import React from 'react';
import styled from 'styled-components';
import BOOK_TYPE_ICON from '../constant/BOOK_TYPE_ICON';

function DetailBox({ rentee }) {

  return (
    <Box>
      <CoverImg src={rentee.bookCoverImageUrl}/>

      <TitleHolder>
        <TypeIcon src={BOOK_TYPE_ICON.APP}/>
        <TextHolder>
          <Id>{rentee.id}</Id>
          <Title>{rentee.title}</Title>
        </TextHolder>
      </TitleHolder>

      { rentee.authorName || rentee.publisherName || rentee.publishedDateEpochSecond ? (
        <DetailInfoBox>
          <InfoTitleHolder>
            <InfoTitle>저자</InfoTitle>
            <InfoTitle>출판사</InfoTitle>
          </InfoTitleHolder>

          <InfoTextHolder>
            <AuthorText>{rentee.authorName}</AuthorText>
            <PublisherText>
              <Publisher>{rentee.publisherName}</Publisher>
              <PublicationDay>{rentee.publishedDateEpochSecond}</PublicationDay>
            </PublisherText>
          </InfoTextHolder>
        </DetailInfoBox>
      ) : null }

      <NoteBox>
        <NoteEmoji>💡</NoteEmoji>
        <NoteText>
          {rentee.note}
        </NoteText>
      </NoteBox>
    </Box>
  );
}

const CoverImg = styled.img`
  border-radius: 10px;
  object-fit: cover;

  width: 50%;
  max-width: 300px;

  margin: 1.8vh 0;
`;

const TitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;

  margin: 1.8vh 0;
`;

const TypeIcon = styled.img`
  width: 8%;
  max-width: 30px;
  border-radius: 50%;
`;

const TextHolder = styled.div`
  margin-left: 2%;
`;

const Id = styled.div`
  font-size: 0.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.secondGray};
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.black};
`;

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

const InfoTitleHolder = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InfoTitle = styled.div`
  width: 50%;
  margin-bottom: 0.8rem;

  text-align: center;
  font-weight: 600;
`;

const InfoTextHolder = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const NoteBox = styled.div`
  margin: 1.8vh 0;
  padding: 0 1.8vh;

  width: 80%;
  border-radius: 20px;

  background-color: #f2f2f2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteEmoji = styled.div`
  font-size: 1.8vh;
  margin: 1.5vh 0;
`;

const NoteText = styled.div`
  width: 90%;
  margin: 1.8vh;

  font-size: 0.9rem;
  text-align: center;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.bgColor};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 2vh;
  padding: 1.8vh 0;

  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export default DetailBox;
