import React from 'react';
import './App.css';
import { Paper, ThemeProvider } from '@mui/material';
import { theme } from './providers/theme';


function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Paper>

        </Paper>
      </ThemeProvider>
    </main>
  );
}

export default App;
