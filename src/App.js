import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider } from "@mui/material";



function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(",")
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <nav>
            <Navbar />
          </nav>
        </header>
        <section>
          <Hero />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
