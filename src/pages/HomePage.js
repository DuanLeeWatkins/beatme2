import React from 'react'
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


export default function HomePage() {


    return (
        <div>
          <header>
            <nav>
              <Navbar />
            </nav>
          </header>
          <section>
            <Hero />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
    );
}