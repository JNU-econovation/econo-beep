import React from 'react';
import styled from 'styled-components';

function DetailTitle({ src, id, title }) {
  return (
    <DetailTitleBox>
      <Type src={src} />
      <Text>
        <Id>{id}</Id>
        <Title>{title}</Title>
      </Text>
    </DetailTitleBox>
  );
}

const DetailTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 80%;
  
  margin: 1rem 0;
`;

const Type = styled.img`
  width: 8%;
  max-width: 30px;
  border-radius: 50%;
`;

const Text = styled.div`
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
export default DetailTitle;
