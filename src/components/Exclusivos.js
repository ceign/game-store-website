import React from "react";
import "./Exclusivos.css";
import FallGuysCharacter_1 from "../images/fall-guys-character-1.png";
import FallGuysCharacter_2 from "../images/fall-guys-character-2.png";
import FallGuysCharacter_3 from "../images/fall-guys-character-3.png";
import FallGuysCharacter_4 from "../images/fall-guys-character-4.png";

const imagesCarousel = [
  {
    id: 1,
    altAttribute: "Character 1",
    srcAttribute: FallGuysCharacter_2,
  },
  {
    id: 2,
    altAttribute: "Character 2",
    srcAttribute: FallGuysCharacter_3,
  },
  {
    id: 3,
    altAttribute: "Character 3",
    srcAttribute: FallGuysCharacter_4,
  },
];

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
            <a
              href="/"
              className="fall-guys__medium-card__button"
              onClick={(event) => event.preventDefault()}
            >
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
              {imagesCarousel.map((item) => (
                <img
                  key={item.id}
                  src={item.srcAttribute}
                  alt={item.altAttribute}
                />
              ))}
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
                &nbsp;Una misión de recolección de puntos en solitario.
              </p>
            </div>
          </div>

          <div className="fall-guys__button">
            <a href="/" onClick={(event) => event.preventDefault()}>
              Ver todos los eventos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusivos;
