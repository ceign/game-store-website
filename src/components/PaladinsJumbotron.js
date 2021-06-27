import React from "react";
import "./PaladinsJumbotron.css";
import PaladinsLogo from "../images/paladins-logo.webp";
import PaladinsDemo from "../images/paladins-demo.png";
import PaladinsCharacter_1 from "../images/paladins-character-1.webp";
import PaladinsCharacter_2 from "../images/paladins-character-2.webp";
import PaladinsCharacter_3 from "../images/paladins-character-3.webp";

const Jumbotron = () => {
  return (
    <section className="paladins-jumbotron">
      <div className="paladins-jumbotron__wrapper">
        <div className="paladins-jumbotron__characters">
          <img src={PaladinsCharacter_1} alt="Pip" />
          <img src={PaladinsCharacter_2} alt="Cassie" />
          <img src={PaladinsCharacter_3} alt="Viktor" />
        </div>

        <div className="paladins-jumbotron__content">
          <img
            src={PaladinsLogo}
            alt="Logo Paladins"
            className="paladins-jumbotron__logo"
          />

          <p>
            <span>¡</span>Obtén un
            <span> 45% de descuento en todos los consumibles </span>
            dentro de las siguientes 24 horas<span>!</span>
          </p>

          <a
            href="/"
            className="paladins-jumbotron__button"
            onClick={(event) => event.preventDefault()}
          >
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
