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
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="navbar-navigation">
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

        <div className="navbar-search-bar">
          <input type="text" placeholder="Buscar título ..." maxLength="18" />
        </div>

        <div className="navbar-account-buttons">
          <div className="navbar-account-button">
            <img src={serverIcon} alt="Servidor" />
          </div>

          <div className="navbar-account-button">
            <img src={gamesIcon} alt="Juegos" />
            <span></span>
          </div>
        </div>

        <div className="navbar-avatar">
          <img
            src={avatar}
            alt="Avatar - Conectado"
            className="navbar-avatar__image"
          />

          <span>Tom Hanks</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
