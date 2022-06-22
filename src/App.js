import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Theme from './styles/Theme';
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

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
