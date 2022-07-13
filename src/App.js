import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <section>
        <Hero />
      </section>
    </div>
  );
}

export default App;
