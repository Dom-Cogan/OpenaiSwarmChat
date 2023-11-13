// InfoBox.js
import React from "react";
import "./infobox.css";

const InfoBox = ({ task, description }) => {
  return (
    <>
      <div className="infoBox">
        <h3>{task}</h3>
        <h3>{description}</h3>
      </div>
      <div className="spacer" />
    </>
  );
};

export default InfoBox;
