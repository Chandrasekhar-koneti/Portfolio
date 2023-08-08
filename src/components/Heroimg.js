import { Link } from "react-router-dom";
import "./Heroimg.css";
import intro from "./assets/intro1image.jpg";
import React from "react";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={intro} alt="introimg" />
      </div>
      <div className="content">
        <p>HI, I'M Koneti Chandrasekhar.</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link className="btn" to="/project">
            PROJECTS
          </Link>
          <Link className="btn btn-light" to="contact">
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
