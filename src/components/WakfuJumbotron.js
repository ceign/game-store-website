import React from "react";
import "./WakfuJumbotron.css";
import WakfuLogo from "../images/logo-wakfu.png";
import WakfuCharacter_1 from "../images/wakfu-dragon.png";
import WakfuCharacter_2 from "../images/wakfu-ani.png";

const WakfuJumbotron = () => {
  return (
    <section className="wakfu-jumbotron">
      <div className="wakfu-jumbotron__wrapper">
        <div className="wakfu-jumbotron__characters">
          <img src={WakfuCharacter_1} alt="Dragon" />
          <img src={WakfuCharacter_2} alt="Ani" />
        </div>

        <div className="wakfu-jumbotron__content">
          <img
            src={WakfuLogo}
            alt="Logo Wakfu"
            className="wakfu-jumbotron__logo"
          />

          <p>
            El nuevo mapa de <span>Ogrest</span> en el mundo de los 12 ha
            llegado <span>¡A batallar!</span>
          </p>

          <a
            href="/"
            className="wakfu-jumbotron__button"
            onClick={(event) => event.preventDefault()}
          >
            Entrar
          </a>
        </div>
      </div>
    </section>
  );
};

export default WakfuJumbotron;
