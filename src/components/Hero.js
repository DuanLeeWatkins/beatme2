import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../media/james-stamler.jpg";

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
        <Box sx={{ color: "white", align: "center", pt: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, pb: 2 }}>
            Access to your beats
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, pb: 5 }}>
            Whenever Wherever
          </Typography>
          <Button
            className="primaryButton"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#7353ba",
              "&:hover": {
                backgroundColor: "#654b95",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
