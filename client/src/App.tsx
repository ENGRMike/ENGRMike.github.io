import React from "react";
import "./App.css";
import { CssBaseline, Paper, ThemeProvider } from "@mui/material";
import { darkTheme } from "./providers/theme";

import { Hompage } from "./layouts/homepage-layout";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Hompage />
      </main>
    </ThemeProvider>
  );
}

export default App;
