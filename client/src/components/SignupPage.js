import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SigninImage from "../media/signin-logo.png";
import { Paper } from "@mui/material";
import { useState } from "react";

import supabase from "../config/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `http://localhost:3000/feed/`,
        },
      });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  const signupPaperStyle = {
    padding: 20,
    height: "55vh",
    width: 300,
    margin: "20px auto",
  };

  return (
    <Grid>
      <Paper elevation={10} style={signupPaperStyle}>
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={SigninImage} alt="Beatme Logo" />
          <Typography component="h1" variant="h5">
            Join Beatme
          </Typography>
          <Box>
            {loading ? (
              <Typography component="h6" mt={4}>
                Sending Magic Link...
              </Typography>
            ) : (
              <Box
                component="form"
                noValidate
                onSubmit={handleLogin}
                sx={{ mt: 3, mb: 4 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography component="h2">
                      Sign in via magic link with your email below
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      value={email}
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Send Magic Link
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
