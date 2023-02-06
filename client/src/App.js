import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignupPage, ErrorPage, Navbar, Feed, SearchFeed } from "./components";


function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
    palette: {
      type: 'light',
      primary: {
        main: '#7353ba'
      }
    }
    
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="feed" element={<Feed />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/search/:searchTerm" element={SearchFeed} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
