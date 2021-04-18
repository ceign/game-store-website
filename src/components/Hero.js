import React from "react";
import "./Hero.css";
import codLogo from "../images/cod-logo.png";
import calendarIcon from "../images/calendar-check.svg";
import arrowNextIcon from "../images/arrow-next-icon.svg";
import arrowPrevIcon from "../images/arrow-prev-icon.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image"></div>

      <div className="hero-reserve">
        <div className="hero-reserve__wrapper">
          <div className="hero-reserve__header">
            <span className="hero-reserve__loader"></span>

            <ul className="hero-reserve__bullet">
              <li className="hero-reserve__bullet--active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="hero-reserve__body">
            <img src={codLogo} alt="" className="hero-reserve__logo" />

            <h3>La temporada de la venganza ya está aquí.</h3>

            <a href="/" className="hero-reserve-cta">
              <p>Reservar Ahora</p>
              <span>
                <img src={calendarIcon} alt="" />
              </span>
            </a>
          </div>

          <div className="hero-reserve__footer">
            <div className="hero-reserve__buttons">
              <a href="/">
                <img src={arrowPrevIcon} alt="Anterior" />
              </a>

              <a href="/">
                <img src={arrowNextIcon} alt="Siguiente" />
              </a>
            </div>
            <ul className="hero-reserve__bullet">
              <li className="hero-reserve__bullet--active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="hero-reserve__loader">
              <span className="hero-reserve__loader-load"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
