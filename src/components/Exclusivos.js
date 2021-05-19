import React from "react";
import "./Exclusivos.css";
import FallGuysCharacter_1 from "../images/fall-guys-character-1.png";
import FallGuysCharacter_2 from "../images/fall-guys-character-2.png";
import FallGuysCharacter_3 from "../images/fall-guys-character-3.png";
import FallGuysCharacter_4 from "../images/fall-guys-character-4.png";

const Exclusivos = () => {
  return (
    <section className="fall-guys">
      <div className="fall-guys__wrapper">
        <div className="fall-guys__medium-card">
          <div className="fall-guys__medium-card__info">
            <h3>¡Bola de nieve!</h3>
            <p>
              Gana puntos por sobrevivir y canjea skins especiales de la
              temporada invierno.
            </p>
            <a href="/" className="fall-guys__medium-card__button">
              Visitar evento
            </a>
          </div>

          <div className="fall-guys__medium-card__image">
            <img src={FallGuysCharacter_1} alt="Winter" />
          </div>
        </div>

        <div className="fall-guys__carrousel">
          <div className="fall-guys__title">
            <h2>Personajes exclusivos del evento</h2>
          </div>

          <div className="fall-guys__swiper">
            <div className="fall-guys__swiper-characters">
              <img src={FallGuysCharacter_2} alt="" />
              <img src={FallGuysCharacter_3} alt="" />
              <img src={FallGuysCharacter_4} alt="" />
            </div>
            <div className="fall-guys__swiper-bullets">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="fall-guys__swiper-info">
              <h3>Fyeti</h3>

              <p>
                <span>
                  ¡Deslízate y deslízate por la pendiente helada en busca de
                  puntos precarios!
                </span>
                Una misión de recolección de puntos en solitario.
              </p>
            </div>
          </div>

          <div className="fall-guys__button">
            <a href="/">Ver todos los eventos</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivos;
