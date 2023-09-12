import React from "react";
import "./App.css";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./providers/theme";

import { AppNavBar } from "./features/navigation";
import { Hompage } from "./layouts/homepage-layout";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppNavBar />

        <CssBaseline />
        <main>
          <Hompage />
        </main>
      </ThemeProvider>
    </Box>
  );
}

export default App;
