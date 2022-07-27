import React, { useEffect, useState } from 'react';
import { RiDeleteBinLine, RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';
import ManagerInfoBox from './ManagerInfoBox';
import axios from 'axios';

function ManagerBookInfo({ id, src, title, author, publisher, publishDay, type, note, setCorrectData }) {
  const [deleteData, setDeleteData] = useState(false);

  const onCorrectClick = () => {
    setCorrectData(id);
    console.log("연필 버튼 누름" + id);
  }

  const onDeleteClick = () => {
    setDeleteData(true);
  }

  const deleteBook = async () => {
    // await axios.delete(process.env.REACT_APP_BEEP_API + 'management/book/', {
    //   params: {id: id}
    // });

    console.log('delete ' + id)
  }

  useEffect(() => {
    if (deleteData === true) {
      deleteBook();
      setDeleteData(false);
    }
  }, [deleteData]);

  return (
    <ManagerInfoBox>
      <IdBox>{id}</IdBox>
      <ImgBox>
        <Img src={src} />
      </ImgBox>
      <TitleBox>{title}</TitleBox>
      <AuthorBox>{author}</AuthorBox>
      <PublisherBox>{publisher}</PublisherBox>
      <PublishDayBox>{publishDay}</PublishDayBox>
      <TypeBox>{type}</TypeBox>
      <NoteBox>{note}</NoteBox>
      <ChangeButton onClick={onCorrectClick}>
        <RiPencilFill />
      </ChangeButton>
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
  
  font-size: 1rem;
  font-weight: 500;
  
  color: ${(props) => props.theme.black};
`;

const AuthorBox = styled.div`
  width: 15%;
  height: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PublisherBox = styled.div`
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
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.firstGray};
  border: none;

  font-size: 1.4rem;
`;

const ChangeButton = styled(OriginButton)`
  :hover {
    color: ${(props) => props.theme.rentBlue};
  }
`;

const DeleteButton = styled(OriginButton)`
  :hover {
    color: ${(props) => props.theme.rentRed};
  }
`;

export default ManagerBookInfo;
