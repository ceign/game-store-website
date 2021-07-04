import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./PopularesCarousel.css";
import "./ValueCard.css";

import ImageCard_1 from "../images/lol.jpg";
import LogoImageCard_1 from "../images/lol-logo.png";
import ImageCard_2 from "../images/ac-valhala.jpg";
import LogoImageCard_2 from "../images/ac-logo.png";
import ImageCard_3 from "../images/gta5.jpg";
import LogoImageCard_3 from "../images/gta-logo.png";
import ImageCard_4 from "../images/rocket-league.jpg";
import LogoImageCard_4 from "../images/rocket-league-logo.png";
import ImageCard_5 from "../images/borderlands.jpg";
import LogoImageCard_5 from "../images/borderlands-logo.jpg";

SwiperCore.use([Navigation, Pagination]);

const dataPopulares = [
  {
    id: 1,
    name: "League of Legends",
    owner: "Riot Games",
    off: "Free to play",
    price: "",
    final_price: "",
    image: ImageCard_1,
    logo: LogoImageCard_1,
    description: "Más de 140 campeones para hacer jugadas épicas.",
  },

  {
    id: 2,
    name: "Assassin's Creed Valhalla",
    owner: "Ubisoft",
    off: "",
    price: "",
    final_price: "$ 37.920",
    image: ImageCard_2,
    logo: LogoImageCard_2,
    description: "Acción ambientada durante la invasión vikinga de Inglaterra.",
  },

  {
    id: 3,
    name: "Grand theft auto 5",
    owner: "Rockstar Games",
    off: "",
    price: "",
    final_price: "$ 29.980",
    image: ImageCard_3,
    logo: LogoImageCard_3,
    description: "Completa misiones y domina la ciudad de Los Santos.",
  },

  {
    id: 4,
    name: "Rocket League",
    owner: "Psyonix LLC",
    off: "Free to play",
    price: "",
    final_price: "",
    image: ImageCard_4,
    logo: LogoImageCard_4,
    description: "Combinación perfecta entre autos y futbol. ¡A ganar!",
  },

  {
    id: 5,
    name: "Borderlands 3",
    owner: "Gearbox Software",
    off: "- 28%",
    price: "$ 38.990",
    final_price: "$ 31.192",
    image: ImageCard_5,
    logo: LogoImageCard_5,
    description: "Disparos en primera persona con elementos de rol y acción.",
  },
];

function PopularesCarousel() {
  return (
    <Swiper
      navigation={false}
      pagination={true}
      className="populares__carousel-wrapper"
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
      {dataPopulares.map((item) => (
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

export default PopularesCarousel;
