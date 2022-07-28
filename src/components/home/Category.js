import React from 'react';
import styled from 'styled-components';
import Type from './Type';
import ContentTitle from './ContentTitle';
import Content from './Content';
import RENTEE_TYPE from '../constant/RENTEE_TYPE';

function Category() {
  const firstRowTypes = [
    { src: RENTEE_TYPE.ICON_URL.WEB, to: RENTEE_TYPE.WEB, text: RENTEE_TYPE.KOREAN.WEB },
    { src: RENTEE_TYPE.ICON_URL.APP, to: RENTEE_TYPE.APP, text: RENTEE_TYPE.KOREAN.APP },
    {
      src: RENTEE_TYPE.ICON_URL.LANGUAGE,
      to: RENTEE_TYPE.LANGUAGE,
      text: RENTEE_TYPE.KOREAN.LANGUAGE
    },
    { src: RENTEE_TYPE.ICON_URL.AI, to: RENTEE_TYPE.AI, text: RENTEE_TYPE.KOREAN.AI },
  ];

  const secondRowTypes = [
    { src: RENTEE_TYPE.ICON_URL.GAME, to: RENTEE_TYPE.GAME, text: RENTEE_TYPE.KOREAN.GAME },
    {
      src: RENTEE_TYPE.ICON_URL.DEVELOPMENT,
      to: RENTEE_TYPE.DEVELOPMENT,
      text: RENTEE_TYPE.KOREAN.DEVELOPMENT
    },
    { src: RENTEE_TYPE.ICON_URL.MAJOR, to: RENTEE_TYPE.MAJOR, text: RENTEE_TYPE.KOREAN.MAJOR },
    {
      src: RENTEE_TYPE.ICON_URL.EQUIPMENT,
      to: RENTEE_TYPE.EQUIPMENT,
      text: RENTEE_TYPE.KOREAN.EQUIPMENT
    },
  ];
  return (
    <Content>
      <ContentTitle>카테고리</ContentTitle>
      <Row>
        {firstRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`search/books?type=${item.to}`} text={item.text}/>
        ))}
      </Row>
      <Row>
        {secondRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`search/books?type=${item.to}`} text={item.text}/>
        ))}
      </Row>
    </Content>
  );
}

const Row = styled.div`
  width: 100%;

  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Category;
