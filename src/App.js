import React from 'react';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import reset from 'styled-reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styledTheme from './styles/Theme';
import Home from './pages/Home';
import BooksList from './pages/BooksList';
import EquipmentList from './pages/EquipmentList';
import SearchList from './pages/SearchList';
import Manager from './pages/Manager';
import PinCode from './pages/PinCode';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import SESSION from './constant/SESSION';
import TypeRenteesList from './pages/TypeRenteesList';
import RenteeDetail from './pages/RenteeDetail';

let sessionStorage = window.sessionStorage;

function LoggedInRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/books" element={<BooksList/>}/>
        <Route path="/search/equipments" element={<EquipmentList/>}/>
        <Route path="/search/all" element={<SearchList/>}/>
        <Route path="/rentee/:id" element={<RenteeDetail />}/>
        <Route path="/pincode/:rentOrReturn/:renteeId" element={<PinCode/>}/>
        <Route path="/manager" element={<Manager/>}/>
        <Route path="/type/:to" element={<TypeRenteesList />} />

        {
          sessionStorage.getItem(SESSION.IS_LOGGED_IN) === 'true' ? (
            <Route path="/profile" element={<Profile/>}/>
          ) : (
            <Route path="/auth" element={<Auth/>}/>
          )
        }
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </Router>
  );
}

function AppRouter() {
  return <LoggedInRoutes/>;
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }

  i {
    color: ${styledTheme.placeholderColor};
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
        <GlobalStyle/>
        <AppRouter/>
      </MuiThemeProvider>
    </StyledThemeProvider>
  );
}

export default App;
