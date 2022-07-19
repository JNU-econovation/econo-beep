import React from 'react';
import styled from 'styled-components';
import Type from './Type';

function Category() {
  const firstRowItems = [
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
  ];

  const secondRowItems = [
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
    { src: 'https://images.vexels.com/media/users/3/205387/isolated/preview/9e5a4a16e78a187fc3e47fc6e2c5f03a-internet-website-icon-stroke.png', to: '/web', text: 'WEB' },
    { src: 'https://seeklogo.com/images/A/android-icon-logo-DB06FA8B39-seeklogo.com.png', to: '/app', text: 'APP' },
  ];
  return (
    <TypeButtonBox>
      <TextBox>
        <Text>카테고리</Text>
      </TextBox>
      <Box>
        {firstRowItems.map((item) => (
          <Type key={item.id} src={item.src} to={item.to} text={item.text} />
        ))}
      </Box>
      <Box>
        {secondRowItems.map((item) => (
          <Type key={item.id} src={item.src} to={item.to} text={item.text} />
        ))}
      </Box>
    </TypeButtonBox>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  @media screen and (max-width: 767px) {
    width: 90vw;
    margin: 0 5vw;
  }
  
  @media screen and (min-width: 768px) {
    width: 40vw;
    margin: 0 30vw;
  }
`;

const TypeButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  
  width: 100vw;
  
  position: relative;

  top: 12.5vh;
`;

const TextBox = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.black};

  @media screen and (max-width: 767px) {
    width: 90vw;
    margin: 0 5vw;
  }

  @media screen and (min-width: 768px) {
    width: 40vw;
    margin: 0 30vw;
  }
`;

const Text = styled.div`
  margin-left: 1rem;
`;

export default Category;
