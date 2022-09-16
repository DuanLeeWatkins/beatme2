import React from "react";

import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import SigninImage from "../media/signin-logo.png";

export default function LoginPage() {
  const loginPaperStyle = {
    padding: 20,
    height: "45vh",
    width: 280,
    margin: "20px auto",
  };
  const linkStyle = {
    color: "#7353ba",
  };
  return (
    <Grid>
      <Paper elevation={10} style={loginPaperStyle}>
        <img src={SigninImage} alt="Beatme Logo" />
        <Typography variant="h5">Sign in</Typography>
        <TextField
          label="Username"
          placeholder="Enter username"
          size="small"
          fullWidth
          required
          margin="normal"
          focused
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter password"
          size="small"
          fullWidth
          required
          type="password"
          margin="normal"
        ></TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
           
            marginTop: "20px",
            marginBottom: "20px",
          }}
          fullWidth
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#" underline="hover" style={linkStyle}>
            Forgot your password?
          </Link>
        </Typography>
        <Typography>
          Don't have an account yet?{" "}
          <Link href="#" underline="hover" style={linkStyle}>
            Sign Up Now
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
}
