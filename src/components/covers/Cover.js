import React from "react";
import "./Cover.css";
import coverVidio from "../../media/coverVidio.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVidio} autoPlay loop muted></video>
      <h1>Gastón Bergami</h1>
      <p>Developer Frontend</p>
    </div>
  );
};

export default Cover;
