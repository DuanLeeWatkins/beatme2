
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box sx={{ background: "black", height: "200px"  }}>
      <Stack direction={{ xs: "row", md: "row" }} p={2}>
        <Box flex={1}>
         
          <Typography color={"white"} align={"center"}> 2022 Beatme. All Rights Reserved</Typography>
          <Typography color={"white"} align={"center"}>
            Contact
          </Typography>
          <Typography color={"white"} align={"center"}>
            Terms of Use
          </Typography>
          <Typography color={"white"} align={"center"}>
            Privacy Policy
          </Typography>
          <Typography color={"white"} align={"center"}>
            Help
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
