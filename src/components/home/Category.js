import React from 'react';
import styled from 'styled-components';
import Type from './Type';
import ContentTitle from './ContentTitle';
import Content from './Content';
import BOOK_TYPE_ICON from '../constant/BOOK_TYPE_ICON';

function Category() {
  const firstRowTypes = [
    { src: BOOK_TYPE_ICON.WEB.src, to: BOOK_TYPE_ICON.WEB.text, text: '웹' },
    { src: BOOK_TYPE_ICON.APP.src, to: BOOK_TYPE_ICON.APP.text, text: '앱' },
    { src: BOOK_TYPE_ICON.LANGUAGE.src, to: BOOK_TYPE_ICON.LANGUAGE.text, text: '개발 언어' },
    { src: BOOK_TYPE_ICON.AI.src, to: BOOK_TYPE_ICON.AI.text, text: 'AI' },
  ];

  const secondRowTypes = [
    { src: BOOK_TYPE_ICON.GAME.src, to: BOOK_TYPE_ICON.GAME.text, text: '게임' },
    { src: BOOK_TYPE_ICON.DEVELOPMENT.src, to: BOOK_TYPE_ICON.DEVELOPMENT.text, text: '개발 교양' },
    { src: BOOK_TYPE_ICON.MAJOR.src, to: BOOK_TYPE_ICON.MAJOR.text, text: '전공' },
    { src: BOOK_TYPE_ICON.EQUIPMENT.src, to: BOOK_TYPE_ICON.EQUIPMENT.text, text: '기자재' },
  ];
  return (
    <Content>
      <ContentTitle>카테고리</ContentTitle>
      <Row>
        {firstRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`type/${item.to}`} text={item.text} />
        ))}
      </Row>
      <Row>
        {secondRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`type/${item.to}`} text={item.text} />
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
