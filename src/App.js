import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styledTheme from './styles/Theme';
import Home from './Pages/Home';
import BooksList from './Pages/BooksList';
import EquipmentList from './Pages/EquipmentList';
import SearchList from './Pages/SearchList';
import BookDetail from './Pages/BookDetail';
import EquipmentDetail from './Pages/EquipmentDetail';
import Manager from './Pages/Manager';
import PinCode from './Pages/PinCode';

function LoggedInRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/books" element={<BooksList />} />
        <Route path="/search/equipments" element={<EquipmentList />} />
        <Route path="/search/all" element={<SearchList />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/equipment/:id" element={<EquipmentDetail />} />
        <Route path="/pincode/:rentOrReturn/:renteeId" element={<PinCode />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </Router>
  );
}

function AppRouter() {
  return <LoggedInRoutes />;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
  }
  
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;
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
  typography: {
    fontFamily: '"Noto Sans KR", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    fontWeightBold: 300,
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
