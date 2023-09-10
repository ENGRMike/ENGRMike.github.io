import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    background: {
      default: "rgb(176,179,184)",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#212121",
    },
    text: {
      secondary: "#03DAC6",
    },
  },
});
