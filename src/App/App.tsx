import React from 'react';
import './App.scss';
import ThemeProvider from "../ThemeProvider/ThemeProvider";
import {Container} from "../Container/Container";

function App() {
    return (
        <ThemeProvider>
            <Container/>
        </ThemeProvider>
    );
}

export default App;
