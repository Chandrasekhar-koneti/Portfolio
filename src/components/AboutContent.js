import { Link } from "react-router-dom";
import "./AboutContent.css";
import react from "./assets/rea.avif";
import js from "./assets/2ndd.avif";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I have been working as a Assistant System Engineer for the last
          1.5years with TCS.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={react} alt="reactimage" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={js} alt="jsimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
