import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styledTheme from './styles/Theme';
import Home from './Pages/Home';

function LoggedInRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function AppRouter() {
  return <LoggedInRoutes />;
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

// https://mui.com/material-ui/customization/palette/#adding-new-colors
// https://mui.com/material-ui/customization/palette/
// https://mui.com/material-ui/customization/color/#main-content
// Mui 라이브러리의 제공 버튼, 인풋 등의 UI에는 바로바로 적용가능한 color 속성이 있다.
// 이들을 재정의하는 문법. info 는 메뉴버튼에 쓰이는 것과 같은 적당한 회색으로 사용하기로 하고, 색깔 만들기
const muiTheme = createTheme({
  palette: {
    info: {
      light: styledTheme.black,
      main: styledTheme.black,
      dark: styledTheme.black,
    },
  },
});

function App() {
  return (
    <StyledThemeProvider theme={styledTheme}>
      <MuiThemeProvider theme={muiTheme}>
        <GlobalStyle />
        <AppRouter />
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;
