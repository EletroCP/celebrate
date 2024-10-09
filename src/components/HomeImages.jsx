import React from "react";
import homeImages from "../res/homeImages.svg" 
const HomeImages = () => {

  return (
    <div  id="home-image-container">
      <img src={homeImages} alt="Icones comemorativos" id="home-image+"/>
    </div>
  );
};

export default HomeImages;