import React from 'react';
import styled from 'styled-components';

function DetailNote({ note }) {
  return (
    <NoteBox>
      <NoteEmoji>💡</NoteEmoji>
      <NoteText>
        {note}
      </NoteText>
    </NoteBox>
  );
}

const NoteBox = styled.div`
  margin: 1rem 0;
  padding: 0 1rem;
  
  width: 80%;
  border-radius: 20px;
  
  background-color: #f2f2f2;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoteEmoji = styled.div`
  font-size: 1rem;
`;

const NoteText = styled.div`
  width: 90%;
  margin: 1rem;
  
  font-size: 0.9rem;
  text-align: center;
`;

export default DetailNote;
