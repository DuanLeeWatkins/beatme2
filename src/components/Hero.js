import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Hero() {
  return (
    <Box>
      <Typography align="left" variant="h4" sx={{fontWeight: 500}}>
        Access to your beats
      </Typography>
      <Typography align="left" variant="h3" sx={{fontWeight: 700}}>
        Whenever Wherever
      </Typography>
    </Box>
  );
}
