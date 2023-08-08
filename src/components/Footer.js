import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Venkatagiri, Tirupati</p>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8639125788
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              konetichandra123@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>
            Pursued B.Tech in Ece from Lovely Professional University.Ability to
            work with JavaScript,Html,Css and few other Front-End technologies.
          </p>
          <div className="social">
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaYoutube
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
