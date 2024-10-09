import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../scripts/ContextProvider";

const NavBar = () => {
  const { hideBurger, setHideBurger } = useContext(Context);

  const navigate = useNavigate();

  const burgerHandler = () => {
    setHideBurger(!hideBurger);
  };

  return (
    <div>
      <nav>
        <a id="nav-button-about" className="nav-buttons" href="#about-container">Sobre</a>
        <a id="nav-button-signature" className="nav-buttons" onClick={() => navigate('/signature')}>Assinatura</a>
        <a id="nav-button-kits" className="nav-buttons" href="#kits-container">Kit Prontos</a>
        <a id="nav-button-customize" className="nav-buttons" onClick={() => burgerHandler()}>Personalize</a>
      </nav>
    </div>
  );
};

export default NavBar;