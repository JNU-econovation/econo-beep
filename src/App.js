import React from "react";
import {ThemeProvider} from "styled-components";
import Theme from "./styles/Theme"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";

const LoggedInRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
);

const AppRouter = () => (
    <LoggedInRoutes/>
)

function App() {
    return (
        <ThemeProvider theme={Theme}>
            <AppRouter/>
        </ThemeProvider>
    );
}

export default App;
