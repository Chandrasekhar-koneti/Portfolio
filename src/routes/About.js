import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroproject from "../components/Heroproject";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroproject heading="ABOUT" text="I`m a friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
