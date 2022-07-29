import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MenuItem, Select, TextField } from '@mui/material';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { DatePicker } from '@mui/x-date-pickers-pro';
import RENTEE_TYPE from '../constant/RENTEE_TYPE';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateObjectToEpochSecond, EpochSecondToDateObject } from '../EpochConverter';
import axios from 'axios';

function ManagerBookForm({
  isEditMode,
  setIsEditMode,
  editingRentee,
  setEditingRentee,
  createBook,
  updateBook
}) {

  const [id, setId] = useState(null);
  const [thumbnail, setThumbnail] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [title, setTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publisherName, setPublisherName] = useState('');
  const [publishedDate, setPublishedDate] = useState(1659069719);
  const [type, setType] = useState(-1);
  const [note, setNote] = useState('');

  useEffect(() => {
    if (!isEditMode) {
      return;
    }

    async function loadEditData() {
      setId(editingRentee?.id);

      const thumbnailUrl = process.env.REACT_APP_BEEP_API + editingRentee?.thumbnailUrl;
      const response = await fetch(thumbnailUrl);
      const blob = await response.blob();
      setThumbnail(new File([blob], 'image.jpg', {type: blob.type}));
      setThumbnailPreview(thumbnailUrl);

      setTitle(editingRentee?.title);
      setAuthorName(editingRentee?.authorName);
      setPublisherName(editingRentee?.publisherName);
      setPublishedDate(editingRentee?.publishedDateEpochSecond);
      setType(RENTEE_TYPE.INDEX[editingRentee?.type]);
      setNote(editingRentee?.note);
    }

    loadEditData();
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
    setAuthorName('');
    setPublisherName('');
    setPublishedDate(1659069719);
    setType(-1);
    setNote('');
  };

  const onTypeChange = (e) => {
    setType(e.target.value);
  };

  const onCancelButtonClick = () => {
    resetForm();
    setIsEditMode(false);
    setEditingRentee(null);
  };

  const onUpdateButtonClick = () => {
    const newBookForm = new FormData();

    newBookForm.append('thumbnail', thumbnail);
    newBookForm.append('title', title);
    newBookForm.append('type', RENTEE_TYPE.ARRAY[type]);
    newBookForm.append('authorName', authorName);
    newBookForm.append('publisherName', publisherName);
    newBookForm.append('publishedDateEpochSecond', publishedDate);
    newBookForm.append('note', note);

    if (!confirm("수정하시겠습니까?")) {
      return;
    } else {
      updateBook(newBookForm, id);
    }
  }

  const onCreateButtonClick = () => {
    const newBookForm = new FormData();

    newBookForm.append('thumbnail', thumbnail);
    newBookForm.append('title', title);
    newBookForm.append('type', RENTEE_TYPE.ARRAY[type]);
    newBookForm.append('authorName', authorName);
    newBookForm.append('publisherName', publisherName);
    newBookForm.append('publishedDateEpochSecond', publishedDate);
    newBookForm.append('note', note);

    if (!confirm("추가하시겠습니까?")) {
      return;
    } else {
      createBook(newBookForm);
    }
  }

  const handlePublishedDate = (date) => {
    setPublishedDate(DateObjectToEpochSecond(date));
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

        <TextField placeholder="저자" id="authorName" size="small" value={authorName}
                   onChange={(e) => setAuthorName(e.target.value)}/>

        <TextField placeholder="출판사" id="publisherName" size="small" value={publisherName}
                   onChange={(e) => setPublisherName(e.target.value)}/>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            inputFormat="yyyy-MM-dd"
            value={EpochSecondToDateObject(publishedDate)}
            onChange={handlePublishedDate}
            renderInput={(params) => <TextField size="small" {...params} />}
          />
        </LocalizationProvider>

        <Select
          labelId="SelectSortOrder"
          id="Select"
          size="small"
          value={type}
          onChange={onTypeChange}
        >
          <MenuItem disabled value={-1}><i>종류</i></MenuItem>
          {
            RENTEE_TYPE.ARRAY.slice(0, -1).map((element, index) => (
              <MenuItem key={index} value={index}>{RENTEE_TYPE.KOREAN[element]}</MenuItem>
            ))
          }
        </Select>

        <TextField placeholder="비고" id="note" size="small" value={note}
                   onChange={(e) => setNote(e.target.value)}/>


        {
          isEditMode ? (
            <EditBox>
              <InputButton onClick={onUpdateButtonClick}>수정</InputButton>
              <InputButton onClick={onCancelButtonClick}>취소</InputButton>
            </EditBox>
          ) : (
            <AddButton onClick={onCreateButtonClick}>추가</AddButton>
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
  width: 100%;
  height: 100%;
  padding: 0 2vw;

  display: grid;
  grid-template-columns: 1fr 5fr 3.5fr 3.5fr 4fr 4fr 3fr 3fr;
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

const InputPublishDate = styled.input`
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 10px;

  text-align: center;
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

export default ManagerBookForm;
