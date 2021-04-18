import React from "react";
import "./Estrenos.css";
import firstImageCard from "../images/jett.png";

const Estrenos = () => {
  return (
    <section className="estrenos">
      <div className="estrenos__wrapper">
        <div className="estrenos__title">
          <h2>Últimos estrenos</h2>
        </div>

        <div className="estrenos__cards">
          <div className="value__card">
            <div className="value__card-image">
              <a href="/">
                <img src={firstImageCard} alt="" />
              </a>
            </div>
            <div className="value__card-information">
              <h3>
                Valorant
                <span>Riot Games</span>
              </h3>

              <span className="value__card-offer">Free to play</span>
            </div>
            <div className="value__card-price">
              <span>$ 44.900</span>

              <span>$ 30.083</span>
            </div>
          </div>

          <div className="value__card">
            <div className="value__card-image">
              <a href="/">
                <img src={firstImageCard} alt="" />
              </a>
            </div>
            <div className="value__card-information">
              <h3>
                Valorant
                <span>Riot Games</span>
              </h3>

              <span className="value__card-offer">Free to play</span>
            </div>
            <div className="value__card-price">
              <span>$ 44.900</span>

              <span>$ 30.083</span>
            </div>
          </div>

          <div className="value__card">
            <div className="value__card-image">
              <a href="/">
                <img src={firstImageCard} alt="" />
              </a>
            </div>
            <div className="value__card-information">
              <h3>
                Valorant
                <span>Riot Games</span>
              </h3>

              <span className="value__card-offer">Free to play</span>
            </div>
            <div className="value__card-price">
              <span>$ 44.900</span>

              <span>$ 30.083</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estrenos;
