import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./EstrenosCarousel.css";
import "./ValueCard.css";

import ImageCard_1 from "../images/valorant.jpg";
import LogoImageCard_1 from "../images/valorant-logo.png";
import ImageCard_2 from "../images/cyberpunk.jpg";
import LogoImageCard_2 from "../images/cyberpunk-logo.png";
import ImageCard_3 from "../images/wd.jpg";
import LogoImageCard_3 from "../images/wd-logo.png";
import ImageCard_4 from "../images/ds.jpg";
import LogoImageCard_4 from "../images/ds-logo.png";
import ImageCard_5 from "../images/miles-morales.jpg";
import LogoImageCard_5 from "../images/miles-morales-logo.png";

SwiperCore.use([Navigation, Pagination]);

const dataEstrenos = [
  {
    id: 1,
    name: "Valorant",
    owner: "Riot Games",
    off: "Free to play",
    price: "",
    final_price: "",
    image: ImageCard_1,
    logo: LogoImageCard_1,
    description: "Batalla en equipos de 5v5 jugadores. ¡Acaba con todos!",
  },

  {
    id: 2,
    name: "Cyberpunk 2077",
    owner: "CD Projekt Red",
    off: "- 33%",
    price: "$ 44.900",
    final_price: "$ 30.083",
    image: ImageCard_2,
    logo: LogoImageCard_2,
    description: "Domina toda la acción y haz lo tuyo en la gran Night City.",
  },

  {
    id: 3,
    name: "Watch Dogs: Legion",
    owner: "Ubisoft",
    off: "- 15%",
    price: "$ 39.990",
    final_price: "$ 33.992",
    image: ImageCard_3,
    logo: LogoImageCard_3,
    description: "Londres es tuya, aventurate y completa misiones tácticas.",
  },

  {
    id: 4,
    name: "Death Stranding",
    owner: "Kojima Productions",
    off: "- 50%",
    price: "$ 45.130",
    final_price: "$ 22.565",
    image: ImageCard_4,
    logo: LogoImageCard_4,
    description: "Exponte al peligro y salva al mundo en esta distopía.",
  },

  {
    id: 5,
    name: "Miles Morales",
    owner: "Sony",
    off: "- 33%",
    price: "$ 45.130",
    final_price: "$ 30.238",
    image: ImageCard_5,
    logo: LogoImageCard_5,
    description: "La ciudad de Nueva York te necesita, ¡Sálvalos Miles!",
  },
];

function EstrenosCarousel() {
  return (
    <Swiper
      navigation={false}
      pagination={true}
      className="estrenos__carousel-wrapper"
      spaceBetween={40}
      slidesPerView={1}
      centeredSlides={true}
      freeMode={false}
      breakpoints={{
        // when window width is >= 321px
        321: {
          spaceBetween: 40,
          slidesPerView: 1.4,
        },
        // when window width is >= 400px
        400: {
          spaceBetween: 20,
          slidesPerView: 1.4,
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 40,
          slidesPerView: 2.5,
        },
        // when window width is >= 1024px
        1024: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        // when window width is >= 1240px
        1240: {
          watchOverflow: true,
          spaceBetween: 0,
          slidesPerView: 5,
          centeredSlides: false,
          pagination: false,
        },
      }}
    >
      {dataEstrenos.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="value-card">
            <div className="value-card__image">
              <div className="value-card__image-wrapper">
                <img
                  src={item.image}
                  alt=""
                  className="value-card__background"
                />
                <img src={item.logo} alt="" className="value-card__logo" />

                <div className="value-card__overlay">
                  <div className="value-card__favorite">
                    <span className="value-card__icon"></span>
                  </div>

                  <p>{item.description}</p>

                  <a
                    href="/"
                    className="value-card__button"
                    onClick={(event) => event.preventDefault()}
                  >
                    Comprar Ahora
                    <span></span>
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="value-card__information">
              <h3>
                {item.name}
                <span>{item.owner}</span>
              </h3>

              <span className="value-card__offer">{item.off}</span>
            </div>
            <div className="value-card__price">
              <span>{item.price}</span>

              <span>{item.final_price}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EstrenosCarousel;
