import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine, RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';
import ManagerInfoBox from './ManagerInfoBox';
import axios from 'axios';
import RENTEE_TYPE from '../constant/RENTEE_TYPE';
import { EpochSecondToDateObject } from '../EpochConverter';
import { useNavigate } from 'react-router-dom';

function ManagerBookInfo({ book, setIsEditMode, setEditingRentee, deleteBook }) {
  const publishedDate = EpochSecondToDateObject(book.publishedDateEpochSecond);

  const navigate = useNavigate();

  const onEditClick = () => {
    setIsEditMode(true);
    setEditingRentee(book);
  }

  const onDeleteClick = () => {
    if (!confirm("삭제하시겠습니까?")) {
      return;
    } else {
      deleteBook(book.id);
    }
  }

  return (
    <ManagerInfoBox>
      <IdBox>{book.id}</IdBox>
      <ImgBox>
        <Img src={process.env.REACT_APP_BEEP_API + book.thumbnailUrl} />
      </ImgBox>
      <TitleBox onClick={() => navigate(`/rentee/${book.id}`)}>{book.title}</TitleBox>
      <AuthorNameBox>{book.authorName}</AuthorNameBox>
      <PublisherNameBox>{book.publisherName}</PublisherNameBox>
      <PublishDayBox>{`${publishedDate.getFullYear()}-${publishedDate.getMonth()}-${publishedDate.getDay()}`}</PublishDayBox>
      <TypeBox>{RENTEE_TYPE.KOREAN[book.type]}</TypeBox>
      <NoteBox>{book.note}</NoteBox>
      <EditButton onClick={onEditClick}>
        <RiPencilFill />
      </EditButton>
      <DeleteButton onClick={onDeleteClick}>
        <RiDeleteBinLine />
      </DeleteButton>
    </ManagerInfoBox>
  );
}

const IdBox = styled.div`
  width: 5%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 5%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 90%;
  max-height: 80%;

  object-fit: cover;
`;

const TitleBox = styled.div`
  width: 25%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 125%;
  font-weight: 500;

  color: ${(props) => props.theme.black};

  cursor: pointer;
`;

const AuthorNameBox = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublisherNameBox = styled.div`
  width: 15%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublishDayBox = styled.div`
  width: 7.5%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TypeBox = styled.div`
  width: 7.5%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteBox = styled.div`
  width: 10%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const OriginButton = styled.button`
  width: 5%;
  height: 80%;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.firstGray};
  border: none;

  font-size: 1.4rem;
`;

const EditButton = styled(OriginButton)`
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.rentBlue};
    background-color: ${(props) => props.theme.rentWeakBlue};
  }
`;

const DeleteButton = styled(OriginButton)`
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.rentRed};
    background-color: ${(props) => props.theme.rentWeakRed};
  }
`;

export default ManagerBookInfo;
