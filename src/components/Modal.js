import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  state = {
    isSwitchOn: false,
  };

  render() {
    const isOn = this.state.isSwitchOn;

    return (
      <div className={`modal ${isOn ? "modal--inactive" : "modal--active"} `}>
        <div className="modal__wrapper">
          <div
            className="modal__button"
            onClick={() => this.setState({ isSwitchOn: !isOn })}
          >
            <span></span>
            <span></span>
          </div>

          <h4 className="modal__title">
            Gestión de mis preferencias sobre las cookies
          </h4>

          <p className="modal__text">
            Este sitio web utiliza cookies para la realización de estadísticas
            de visitas y para proponerte vídeos, botones de compartir en las
            redes sociales, publicidad personalizada y un servicio de chat.
          </p>

          <a
            href="/"
            className="modal__link"
            onClick={(event) => event.preventDefault()}
          >
            Más información sobre nuestra política de cookies
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
