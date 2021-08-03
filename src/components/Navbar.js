import React from "react";
import "./Navbar.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.png";
import serverIcon from "../images/server-icon.svg";
import gamesIcon from "../images/game-icon.svg";
import imageItem1 from "../images/keyart-shorter.jpg";

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
          <div className="navbar__account-menu">
            <div className="navbar__account-menu__wrapper">
              <div className="navbar__account-menu__header">
                <h4>Notificaciones</h4>

                <a href="/" onClick={(event) => event.preventDefault()}>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <div className="navbar__account-menu__body">
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Legends of Runeterra: comodín épico gratis</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
                <div className="navbar__account-menu__notification">
                  <div className="navbar__account-menu__notification__title">
                    <h3>Warframe: Aprovecha la nueva temporada</h3>
                  </div>
                  <div className="navbar__account-menu__notification__image">
                    <img src={imageItem1} alt="Warframe" />
                  </div>
                  <div className="navbar__account-menu__notification__footer">
                    <div className="navbar__account-menu__notification__information">
                      <h5>Duración: 16 jul - 3 ago</h5>
                      <p>Digital extremes Inc.</p>
                    </div>
                    <div className="navbar__account-menu__notification__cta">
                      <a href="/" onClick={(event) => event.preventDefault()}>
                        Ver más
                      </a>
                    </div>
                  </div>
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
