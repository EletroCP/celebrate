import React from "react";

const NavBar = () => {
  return (
    <div>
        <p id="nav-button-about" className="nav-buttons">Sobre</p>
        <p id="nav-button-signature" className="nav-buttons">Assinatura</p>
        <p id="nav-button-kits" className="nav-buttons">Kit Prontos</p>
        <p id="nav-button-customize" className="nav-buttons">Personalize</p>
    </div>
  );
};

export default NavBar;