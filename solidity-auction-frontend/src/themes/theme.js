import { createTheme } from "@mui/material";

export const theme = createTheme({
  colors: {
    tertiary: {
      dark: "#212529",
      main: "#343a40",
      light: "#495057",
    },
  },
  typography: {
    fontFamily: "'Montserrat', sans-serif",
    allVariants: {
      color: "#343a40",
    },
    h2: {
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
      wordSpacing: "1px",
    },
  },
});
