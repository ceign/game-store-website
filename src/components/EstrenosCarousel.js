import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./EstrenosCarousel.css";

import ImageCard_1 from "../images/jett.png";
import ImageCard_2 from "../images/cyberpunk.png";
import ImageCard_3 from "../images/wd.jpg";
import ImageCard_4 from "../images/ds.jpg";
import ImageCard_5 from "../images/miles-morales.jpg";

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    name: "Valorant",
    owner: "Riot Games",
    off: "Free to play",
    price: "",
    final_price: "",
    image: ImageCard_1,
  },

  {
    id: 2,
    name: "Cyberpunk 2077",
    owner: "CD Projekt Red",
    off: "- 33%",
    price: "$ 44.900",
    final_price: "$ 30.083",
    image: ImageCard_2,
  },

  {
    id: 3,
    name: "Watch Dogs: Legion",
    owner: "Ubisoft",
    off: "- 15%",
    price: "$ 39.990",
    final_price: "$ 33.990",
    image: ImageCard_3,
  },

  {
    id: 4,
    name: "Death Stranding",
    owner: "Kojima Productions",
    off: "- 50%",
    price: "$ 45.130",
    final_price: "$ 22.565",
    image: ImageCard_4,
  },

  {
    id: 5,
    name: "Miles Morales",
    owner: "Sony",
    off: "- 33%",
    price: "$ 45.130",
    final_price: "$ 28.134",
    image: ImageCard_5,
  },
];

function EstrenosCarousel() {
  return (
    <Swiper
      navigation={false}
      pagination={true}
      className="estrenos-carousel__wrapper"
      spaceBetween={40}
      slidesPerView={1}
      centeredSlides={true}
      freeMode={false}
      breakpoints={{
        // when window width is >= 640px
        321: {
          spaceBetween: 40,
          slidesPerView: 1.4,
        },

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
        // when window width is >= 1200px
        1240: {
          watchOverflow: true,
          spaceBetween: 0,
          slidesPerView: 5,
          centeredSlides: false,
          pagination: false,
        },
      }}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id}>
          <div className="value__card">
            <div className="value__card-image">
              <a href="/">
                <img src={user.image} alt="" />
              </a>
            </div>
            <div className="value__card-information">
              <h3>
                {user.name}
                <span>{user.owner}</span>
              </h3>

              <span className="value__card-offer">{user.off}</span>
            </div>
            <div className="value__card-price">
              <span>{user.price}</span>

              <span>{user.final_price}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default EstrenosCarousel;
