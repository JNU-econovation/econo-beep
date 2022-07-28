import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { MenuItem, Select, TextField } from '@mui/material';
import RENTEE_TYPE from '../constant/RENTEE_TYPE';

function ManagerEquipmentForm({
  isEditMode,
  setIsEditMode,
  editingRentee,
  setEditingRentee,
  createEquipment,
  updateEquipment
}) {

  const [thumbnail, setThumbnail] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isEditMode) {
      return;
    }

    setThumbnail('');
    setThumbnailPreview(editingRentee?.thumbnailUrl);
    setTitle(editingRentee?.title);
    setNote(editingRentee?.note);
  }, [isEditMode]);

  useEffect(() => {
    if (!thumbnail || thumbnail === '') {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setThumbnailPreview(e.target.result);
    };
    reader.readAsDataURL(thumbnail);
  }, [thumbnail]);

  const resetForm = () => {
    setThumbnail('');
    setThumbnailPreview('');
    setTitle('');
    setType(-1);
    setNote('');
  };

  const onCancelButtonClick = () => {
    resetForm();
    setIsEditMode(false);
    setEditingRentee(null);
  };

  return (
    <Form>
      <Grid>
        <ImgBox>
          <label htmlFor="input-thumbnail">
            {
              thumbnail === '' ? (
                <ThumbnailIcon>
                  <AddPhotoAlternateOutlinedIcon/>
                </ThumbnailIcon>
              ) : (
                <ThumbnailPreview src={thumbnailPreview}/>
              )
            }
          </label>
          <input id="input-thumbnail" type="file" placeholder="이미지" style={{ display: 'none' }}
                 onChange={(e) => {
                   console.log(e.target.files);
                   setThumbnail(e.target.files[0]);
                 }}/>
        </ImgBox>

        <TextField placeholder="제목" id="title" size="small" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>

        <MenuItem value={RENTEE_TYPE.KOREAN.EQUIPMENT}>{RENTEE_TYPE.KOREAN.EQUIPMENT}</MenuItem>

        <TextField placeholder="비고" id="note" size="small" value={note}
                   onChange={(e) => setNote(e.target.value)}/>


        {
          isEditMode ? (
            <EditBox>
              <InputButton onClick={updateEquipment}>수정</InputButton>
              <InputButton onClick={onCancelButtonClick}>취소</InputButton>
            </EditBox>
          ) : (
            <AddButton onClick={createEquipment}>추가</AddButton>
          )
        }
      </Grid>
    </Form>
  );
}

const Form = styled.div`
  width: 97vw;
  height: 6vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  width: 90%;
  height: 100%;
  padding: 0 2vw;

  display: grid;
  grid-template-columns: 1fr 5fr 2fr 5fr 2fr;
  column-gap: 1vw;
  align-items: center;

  border-radius: 20px;

  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.managerBoxShadow};

  color: ${(props) => props.theme.firstGray};
  font-size: 0.8rem;

  background-color: ${(props) => props.theme.bgColor};
`;

const ThumbnailIcon = styled.div`
  width: 4vh;
  height: 4vh;

  border-radius: 4vh;
  background-color: ${(props) => props.theme.borderGray};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgBox = styled.div`
  width: 4vh;
  height: 4vh;

  display: flex;
  justify-content: center;
  align-items: center;

`;

const ThumbnailPreview = styled.img`
  width: 100%;
  height: 100%;
`;

const AddButton = styled.button`
  width: 100%;
  height: 4vh;
  margin: 0 1vw;
  padding: 0;

  border: none;
  border-radius: 20px;
  color: #001AFF;
  background-color: #CACFFF;

  text-align: center;
  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  :hover {
    color: #FDFDFD;
    background-color: #001AFF;
  }
`;

const EditBox = styled.div`
  width: 100%;
  height: 4vh;

  margin: 0 1vw;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const InputButton = styled.button`
  width: 45%;
  height: 100%;

  text-align: center;

  border: none;
  border-radius: 10px;

  font-size: 0.9rem;
  font-weight: 600;

  color: #001AFF;
  background-color: #CACFFF;

  :hover {
    color: #FDFDFD;
    background-color: #001AFF;
  }
`;

export default ManagerEquipmentForm;
