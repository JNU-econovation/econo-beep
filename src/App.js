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
    text-decoration: none;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const muiTheme = createTheme({
  palette: {
    info: {
      light: styledTheme.black,
      main: styledTheme.firstGray,
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
