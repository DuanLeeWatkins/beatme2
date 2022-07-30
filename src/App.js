import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <nav><Navbar /></nav>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <footer><Footer /></footer>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
