import React from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import serverIcon from "../images/server-icon.svg";
import gamesIcon from "../images/game-icon.svg";

const Navbar = () => {
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
