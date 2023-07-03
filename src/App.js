import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';
import Layout from './components/Layout';
import Leaderboard from './components/Leaderboard';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    );
}

export default App;
