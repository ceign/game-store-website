import React from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import serverIcon from "../images/server-icon.svg";
import gamesIcon from "../images/game-icon.svg";

const Navbar = () => {
  return (
    <nav className="c-navbar">
      <div className="c-navbar__wrapper">
        <div className="c-navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="c-navbar-navigation">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Estrenos</a>
            </li>
            <li>
              <a href="/">Juegos AAA</a>
            </li>
            <li>
              <a href="/">Populares</a>
            </li>
          </ul>
        </div>

        <div className="c-navbar-search-bar">
          <input type="text" placeholder="Buscar título ..." maxLength="18" />
        </div>

        <div className="c-navbar-account-buttons">
          <div className="c-navbar-account-button">
            <img src={serverIcon} alt="Servidor" />
          </div>

          <div className="c-navbar-account-button">
            <img src={gamesIcon} alt="Juegos" />
            <span></span>
          </div>
        </div>

        <div className="c-navbar-avatar">
          <img
            src={avatar}
            alt="Avatar - Conectado"
            className="c-navbar-avatar__image"
          />

          <span>Tom Hanks</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
