import React from 'react';
import styled from 'styled-components';
import Class from './Class';

function Classifications() {
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
    <ClassBox>
      <Box>
        {firstRowItems.map((item) => (
          <Class src={item.src} to={item.to} text={item.text} />
        ))}
      </Box>
      <Box>
        {secondRowItems.map((item) => (
          <Class src={item.src} to={item.to} text={item.text} />
        ))}
      </Box>
    </ClassBox>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 100vw;
  
  @media screen and (min-width: 767px) {
    width: 60vw;
  }
`;

const ClassBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  width: 90vw;
  
  position: absolute;
  top: 60vh;
  left: 5vw;
  
  @media screen and (min-width: 767px) {
    left: 20vw;
  }
`;

export default Classifications;
