import React, { useState } from 'react';
import { RiDeleteBinLine, RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';
import ManagerInfoBox from './ManagerInfoBox';
import RENTEE_TYPE from '../constant/RENTEE_TYPE';
import { useNavigate } from 'react-router-dom';

function ManagerEquipmentInfo({ equipment, setIsEditMode, setEditingRentee, deleteEquipment }) {

  const navigate = useNavigate();

  const onEditClick = () => {
    setIsEditMode(true);
    setEditingRentee(equipment);
  }

  const onDeleteClick = () => {
    if (!confirm("삭제하시겠습니까?")) {
      return;
    } else {
      deleteEquipment(equipment.id);
    }

  }

  return (
    <ManagerInfoBox>
      <IdBox>{equipment.id}</IdBox>
      <ImgBox>
        <Img src={process.env.REACT_APP_BEEP_API + equipment.thumbnailUrl} />
      </ImgBox>
      <TitleBox onClick={() => navigate(`/rentee/${equipment.id}`)}>{equipment.title}</TitleBox>
      <TypeBox>{RENTEE_TYPE.KOREAN[equipment.type]}</TypeBox>
      <NoteBox>{equipment.note}</NoteBox>
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
  width: 40%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 125%;
  font-weight: 500;

  color: ${(props) => props.theme.black};

  cursor: pointer;
`;

const TypeBox = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteBox = styled.div`
  width: 20%;
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

const EditButton = styled(OriginButton)`
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.rentBlue};
  }
`;

const DeleteButton = styled(OriginButton)`
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme.rentRed};
  }
`;

export default ManagerEquipmentInfo;
