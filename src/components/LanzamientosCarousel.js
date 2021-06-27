import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./LanzamientosCarousel.css";
import "./ReserveCard.css";

import ImageCard_1 from "../images/chivalry-2.jpg";
import ImageCard_2 from "../images/farcry.jpg";
import ImageCard_3 from "../images/medium.jpg";

SwiperCore.use([Navigation, Pagination]);

const dataLanzamientos = [
  {
    id: 1,
    image: ImageCard_1,
    name: "Chivalry 2",
    owner: "Torn Banner Studios",
  },
  {
    id: 2,
    image: ImageCard_2,
    name: "Far Cry 6",
    owner: "Ubisoft",
  },
  {
    id: 3,
    image: ImageCard_3,
    name: "The Medium",
    owner: "Xbox Microsoft",
  },
];

function LanzamientosCarousel() {
  return (
    <Swiper
      navigation={false}
      pagination={true}
      className="lanzamientos__carousel-wrapper"
      spaceBetween={40}
      slidesPerView={1}
      centeredSlides={true}
      freeMode={false}
      breakpoints={{
        // when window width is >= 321px
        321: {
          spaceBetween: 20,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          spaceBetween: 400,
        },
        // when window width is >= 1024px
        1024: {
          spaceBetween: 0,
          slidesPerView: 2,
        },
        // when window width is >= 1240px
        1240: {
          watchOverflow: true,
          spaceBetween: 0,
          slidesPerView: 3,
          centeredSlides: false,
          pagination: false,
        },
      }}
    >
      {dataLanzamientos.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="reserve-card">
            <div className="reserve-card__image">
              <a href="/" onClick={(event) => event.preventDefault()}>
                <img
                  src={item.image}
                  alt=""
                  className="reserve-card__background"
                />
              </a>
            </div>
            <div className="reserve-card__information">
              <h3>
                {item.name} <span> {item.owner} </span>
              </h3>

              <div className="reserve-card__button">
                <a href="/" onClick={(event) => event.preventDefault()}>
                  Reservar
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LanzamientosCarousel;
