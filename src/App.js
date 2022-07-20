import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styledTheme from './styles/Theme';
import Home from './Pages/Home';
import BookList from './Pages/BookList';
import EquipmentList from './Pages/EquipmentList';
import SearchList from './Pages/SearchList';
import BookDetail from './Pages/BookDetail';
import EquipmentDetail from './Pages/EquipmentDetail';
import Manager from './Pages/Manager';

function LoggedInRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/equipment" element={<EquipmentList />} />
        <Route path="/search" element={<SearchList />} />
        <Route path="/book-detail/:bookId" element={<BookDetail />} />
        <Route path="/equipment-detail/:equipmentId" element={<EquipmentDetail />} />
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

  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
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
