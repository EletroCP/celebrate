import React from "react";
import { useNavigate } from "react-router-dom";
import { GiSevenPointedStar } from "react-icons/gi";

const HomeIcon = () => {
  const navigate = useNavigate();
  return(
    <div  id="home-icon-container" className="grid-icon-container">
      <GiSevenPointedStar id="home-icon-image" alt="Icone" onClick={() => navigate('/')}/>
      <p id="home-icon">Celebrate</p>
    </div>
  );
};

export default HomeIcon;