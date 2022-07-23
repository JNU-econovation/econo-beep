import React from 'react';
import styled from 'styled-components';
import Type from './Type';
import ContentTitle from './ContentTitle';
import Content from './Content';

function Category() {
  const firstRowTypes = [
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
  ];

  const secondRowTypes = [
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
  ];
  return (
    <Content>
      <ContentTitle>카테고리</ContentTitle>
      <Row>
        {firstRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={item.to} text={item.text} />
        ))}
      </Row>
      <Row>
        {secondRowTypes.map((item) => (
          <Type key={item.id} src={item.src} to={item.to} text={item.text} />
        ))}
      </Row>
    </Content>
  );
}

const Row = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-around;
`;

export default Category;
