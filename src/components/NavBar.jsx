import React, { useContext } from "react";
import { Context } from "../scripts/ContextProvider";

const NavBar = () => {
  const { hideBurger, setHideBurger } = useContext(Context);

  const burgerHandler = () => {
    setHideBurger(!hideBurger);
  };

  return (
    <div>
      <nav>
        <a id="nav-button-about" className="nav-buttons" href="#about-container">Sobre</a>
        <a id="nav-button-signature" className="nav-buttons" href='/signature'>Assinatura</a>
        <a id="nav-button-kits" className="nav-buttons" href="#kits-container">Kit Prontos</a>
        <p id="nav-button-customize" className="nav-buttons" onClick={() => burgerHandler()}>Personalize</p>
      </nav>
    </div>
  );
};

export default NavBar;