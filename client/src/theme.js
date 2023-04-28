import { createTheme } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: ["Lato", "sans-serif"].join(","),
  },
  palette: {
    type: "light",
    primary: {
      main: "#7353ba",
    },
  },
});

export default theme