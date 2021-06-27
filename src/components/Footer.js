import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  state = {
    isSwitchOn: false,
  };

  render() {
    const isOn = this.state.isSwitchOn;

    return (
      <section className="footer">
        <div className="footer__wrapper">
          <div className="footer-subscribe">
            <div className="footer-subscribe__wrapper">
              <h2>Suscribete para el catálogo completo</h2>
              <p className="footer-subscribe__text">
                ¡Te actualizaremos de todas las novedades y próximos
                lanzamientos!
              </p>
              <div className="footer-subscribe__input">
                <input type="text" />
              </div>
              <div className="footer-subscribe__privacy-policies">
                <div
                  className={
                    isOn
                      ? "footer-subscribe__switch--on"
                      : "footer-subscribe__switch--off"
                  }
                  onClick={() => this.setState({ isSwitchOn: !isOn })}
                >
                  <span></span>
                </div>
                <p>
                  Acepto la <span>Politica de Privacidad</span>
                </p>
              </div>
              <a href="/" className="footer-subscribe__button">
                Suscribirme
              </a>
            </div>
          </div>

          <div className="footer-items">
            <h3>Recursos</h3>

            <div className="footer-items__resources">
              <ul>
                <li>Apoya a la comunidad</li>
                <li>Publíca en la plataforma</li>
                <li>Galería de gráficos</li>
              </ul>
              <ul>
                <li>Servicios en línea</li>
                <li>Políticas de arte</li>
                <li>Estudios</li>
              </ul>
              <ul>
                <li>Club de la tienda</li>
                <li>Servicios en línea</li>
                <li>Reglas de la comunidad</li>
              </ul>
            </div>

            <h3>Empresa</h3>

            <div className="footer-items__resources">
              <ul>
                <li>Contacto</li>
                <li>Conferencias</li>
                <li>Novedades 2022</li>
              </ul>
              <ul>
                <li>Agenda</li>
                <li>Colaboradores</li>
              </ul>
            </div>
          </div>

          <div className="footer-disclaymer">
            <p>
              © 2022. Todos los derechos reservados. El logotipo de Fortnite, el
              logotipo Unreal, Unreal Engine, Unreal Tournament y el logotipo de
              todos los juegos en el catálogo son marcas comerciales o marcas
              registradas tanto en América Latina como en el resto del mundo, y
              pertenecen a sus respectivas compañías.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
