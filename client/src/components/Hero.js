import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../media/james-stamler.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
        }}
      >
        <Box sx={{ color: "white", pt: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, pb: 2 }}>
            Access to your beats
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>
            Whenever Wherever
          </Typography>
          <Button
            variant="contained"
            size="large"
            color="primary"
            component={Link}
            to="login"
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
