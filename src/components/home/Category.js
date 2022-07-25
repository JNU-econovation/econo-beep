import React from 'react';
import styled from 'styled-components';
import Type from './Type';
import ContentTitle from './ContentTitle';
import Content from './Content';
import BOOK_TYPE_ICON from '../constant/BOOK_TYPE_ICON';

function Category() {
  const firstRowTypes = [
    { src: BOOK_TYPE_ICON.WEB, to: 'web', text: '웹' },
    { src: BOOK_TYPE_ICON.APP, to: 'app', text: '앱' },
    { src: BOOK_TYPE_ICON.LANGUAGE, to: 'language', text: '언어' },
    { src: BOOK_TYPE_ICON.AI, to: 'ai', text: 'AI' },
  ];

  const secondRowTypes = [
    { src: BOOK_TYPE_ICON.GAME, to: 'game', text: '게임' },
    { src: BOOK_TYPE_ICON.DEVELOPMENT, to: 'development', text: '개발 교양' },
    { src: BOOK_TYPE_ICON.MAJOR, to: 'major', text: '전공' },
    { src: BOOK_TYPE_ICON.EQUIPMENT, to: 'equipment', text: '기자재' },
  ];
  return (
    <Content>
      <ContentTitle>카테고리</ContentTitle>
      <Row>
        {firstRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`search/all/?keyword=${item.to}`} text={item.text} />
        ))}
      </Row>
      <Row>
        {secondRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={`search/all/?keyword=${item.to}`} text={item.text} />
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
