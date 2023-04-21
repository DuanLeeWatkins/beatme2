import { React, useState, useEffect } from "react";

import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import SigninImage from "../media/signin-logo.png";

import supabase from "../config/supabaseClient";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(null);

  supabase.auth.onAuthStateChange(async (e) => {
    if (e !== "SIGNED_OUT") {
      // forward to feed
      navigate("/feed");
    } else {
      // forward to login in page
      navigate("/login");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setFormError("Please fill in all fields ");
      return;
    }
  };

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
