import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Gastón</h1>
        <p>Barcelona,España</p>
      </div>
      <div className="footer-contact">
        <h3>Contactame</h3>
        <p>Y pongamos manos a la obra</p>
      </div>
      <div className="footer-sns">
        <div className="desing-by">Diseños echos por mi</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/gaston-bergami-0ab563186/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a
            href="https://github.com/gastonbergami"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
