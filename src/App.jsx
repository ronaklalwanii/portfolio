import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Links from "./components/Links";
import Footer from "./components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-black text-white dark">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">
        <Header />
        <Experience />
        <Projects />
        <Links />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
