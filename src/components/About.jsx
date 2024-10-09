import React from "react";
import text from "../scripts/texts.js"

const About = () => {
  return (
    <div id="about-container">
      <p id="about-text">
        { text.about }
      </p>
    </div>
  );
};

export default About;