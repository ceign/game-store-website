import React from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import serverIcon from "../images/server-icon.svg";
import gamesIcon from "../images/game-icon.svg";
import imageItem1 from "../images/keyart-shorter.jpg";
import imageItem2 from "../images/yasuo.jpg";
import imageItem3 from "../images/apex.jpg";
import imageItem4 from "../images/detroit.jpg";
import imageItem5 from "../images/zero-down.jpeg";

const notificationItems = [
  {
    id: 1,
    title: "Warframe: Aprovecha el bonus de doble xp esta semana",
    image: imageItem1,
    date: "Duración: 16 jul - 3 ago",
    company: "Digital extremes Inc.",
  },
  {
    id: 2,
    title: "Legends of Runeterra: comodín épico gratis",
    image: imageItem2,
    date: "Duración: 13 jul - 7 ago",
    company: "Riot Games Inc.",
  },
  {
    id: 3,
    title: "Apex Legends: Nuevo personaje, Crypto el dragón",
    image: imageItem3,
    date: "Duración: 9 jul - 5 ago",
    company: "Electronic Arts Inc.",
  },
  {
    id: 4,
    title: "Detroit Become Human: La libertad tiene un precio",
    image: imageItem4,
    date: "Duración: 11 jul - 2 ago",
    company: "Quantic Dream Inc.",
  },
  {
    id: 5,
    title: "Forbidden West: corrige fallos y problemas de rendimiento en PC",
    image: imageItem5,
    date: "Duración: 5 jul - 12 ago",
    company: "Guerrilla Games Inc.",
  },
];

const Navbar = () => {
  console.log(notificationItems);
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar__navigation">
          <ul>
            <li>
              <a href="/" onClick={(event) => event.preventDefault()}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/" onClick={(event) => event.preventDefault()}>
                Explorar
              </a>
            </li>
            <li>
              <a href="/" onClick={(event) => event.preventDefault()}>
                Juegos AAA
              </a>
            </li>
            <li>
              <a href="/" onClick={(event) => event.preventDefault()}>
                Aclamados
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar__search-bar">
          <input type="text" placeholder="Buscar título ..." maxLength="18" />
        </div>

        <div className="navbar__account-buttons">
          <div className="navbar__account-button">
            <img src={serverIcon} alt="Servidor" />
          </div>
          <div className="navbar__account-button">
            <img src={gamesIcon} alt="Juegos" />
            <span></span>
          </div>
          <div className="navbar__account-menu">
            <div className="navbar__account-menu__wrapper">
              <div className="navbar__account-menu__header">
                <h4>Novedades de la semana</h4>

                <a href="/" onClick={(event) => event.preventDefault()}>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="navbar__account-menu__body">
                {notificationItems.map((item) => (
                  <div
                    className="navbar__account-menu__notification"
                    key={item.id}
                  >
                    <div className="navbar__account-menu__notification__title">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="navbar__account-menu__notification__image">
                      <img src={item.image} alt="Warframe" />
                    </div>
                    <div className="navbar__account-menu__notification__footer">
                      <div className="navbar__account-menu__notification__information">
                        <h5>{item.date}</h5>
                        <p>{item.company}</p>
                      </div>
                      <div className="navbar__account-menu__notification__cta">
                        <a href="/" onClick={(event) => event.preventDefault()}>
                          Ver más
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="navbar__account-menu__cta">
                  <a href="/" onClick={(event) => event.preventDefault()}>
                    Ver todas las novedades
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar__avatar">
          <img src={avatar} alt="Avatar - Conectado" />

          <span>Tom Hanks</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
