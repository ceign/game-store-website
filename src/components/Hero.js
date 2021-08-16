import React from "react";
import "./Hero.css";
import codLogo from "../images/cod-logo.png";
import calendarIcon from "../images/calendar-check.svg";
import arrowNextIcon from "../images/arrow-next-icon.svg";
import arrowPrevIcon from "../images/arrow-prev-icon.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image"></div>

      <div className="hero__reserve">
        <div className="hero__reserve-wrapper">
          <div className="hero__reserve-header">
            <span className="hero__reserve-loader"></span>

            <ul className="hero__reserve-bullet">
              <li className="hero__reserve-bullet--active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="hero__reserve-body">
            <img src={codLogo} alt="" className="hero__reserve-logo" />

            <h3>La temporada de la venganza ya está aquí.</h3>
            <div className="hero__reserve-cta__wrapper">
              <a
                href="/"
                className="hero__reserve-cta"
                onClick={(event) => event.preventDefault()}
              >
                <p>Reservar Ahora</p>
                <span>
                  <img src={calendarIcon} alt="" />
                </span>
              </a>
            </div>
          </div>

          <div className="hero__reserve-footer">
            <div className="hero__reserve-buttons">
              <a href="/" onClick={(event) => event.preventDefault()}>
                <img src={arrowPrevIcon} alt="Anterior" />
              </a>

              <a href="/" onClick={(event) => event.preventDefault()}>
                <img src={arrowNextIcon} alt="Siguiente" />
              </a>
            </div>
            <ul className="hero__reserve-bullet">
              <li className="hero__reserve-bullet--active"></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div className="hero__reserve-loader">
              <span className="hero__reserve-loader-load"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
