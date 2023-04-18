import { createTheme } from "@mui/material";

import React from 'react'

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