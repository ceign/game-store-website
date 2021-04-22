import React from "react";
import "./PaladinsJumbotron.css";
import PaladinsLogo from "../images/paladins-logo.png";
import PaladinsDemo from "../images/paladins-demo.png";
import PaladinsCharacter_1 from "../images/paladins-character-1.png";

const Jumbotron = () => {
  return (
    <section className="paladins-jumbotron">
      <div className="paladins-jumbotron__wrapper">
        <div className="paladins-jumbotron__characters">
          <img src={PaladinsCharacter_1} alt="Logo Paladins" />
        </div>

        <div className="paladins-jumbotron__content">
          <img
            src={PaladinsLogo}
            alt="Logo Paladins"
            className="paladins-jumbotron__logo"
          />

          <p>
            ¡Obtén un <span>45% de descuento en todos los consumibles</span>
            dentro de las siguientes 24 horas!
          </p>

          <a href="/" className="paladins-jumbotron__button">
            Visitar evento
          </a>

          <img
            src={PaladinsDemo}
            alt="Paladins Preview"
            className="paladins-jumbotron__demo"
          />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
