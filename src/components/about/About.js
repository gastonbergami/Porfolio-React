import React from "react";
import "./About.css";
import imgGaston from "../../media/foto_Gaston.jpeg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Dejame decirte algo sobre mi </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          fuga inventore voluptatem quae provident dolorem illum nesciunt
          exercitationem suscipit hic facere delectus veniam odio non corporis,
          cumque autem quas. Optio?
        </p>
      </div>
      <div className="about-img">
        <img src={imgGaston} alt="about" />
      </div>
    </div>
  );
};

export default About;
