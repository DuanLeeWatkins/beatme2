import { Box, Stack, Typography, Link } from "@mui/material";
import React from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="White" align="center" {...props}>
      {"© "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="https://mui.com/">
        Beatme.com
      </Link>{" "}
      All Rights Reserved
      
    </Typography>
  );
}
function Footer() {
  return (
    <Box sx={{ background: "black", height: "200vh" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={2}>
        <Box flex={1}>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
