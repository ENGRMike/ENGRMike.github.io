import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface Theme {
    text?: {
      secondary?: {
        fontSize: string,
        color: string,
      }
    }
  }

  interface ThemeOptions {
    text?: {
      secondary?: {
        fontSize?: React.CSSProperties['fontSize'],
        color?: React.CSSProperties['color'],
      }
    }
  }
}

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
  },
  text: {
    secondary: {
      fontSize: '16px',
      color: '#03DAC6'
    }
  },
});
