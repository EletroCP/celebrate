import React, { useContext } from "react";
import { Context } from "../scripts/ContextProvider";

const Categories= () => {
  const { hideBurger } = useContext(Context);
  return (
    <div style={{ display: hideBurger ? 'none' : 'flex'}} id="burger-container">
      <ul id="burger-ul">
        <li className="burger-li">Camping e atividades ao ar livre</li>
        <li className="burger-li">Cestas, tabuas de frios, festa na caixa e presentes</li>
        <li className="burger-li">Encontros romanticos</li>
        <li className="burger-li">Festas e eventos</li>
        <li className="burger-li">Infantil</li>
        <li className="burger-li">Diversão entre amigos</li>
        <li className="burger-li">Para toda a familia</li>
        <li className="burger-li">Geek</li>
      </ul>
    </div>
  );
};

export default Categories