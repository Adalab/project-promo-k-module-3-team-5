import React from "react";
import cardImg1 from "../images/pin-long-brown-hair.png";
import cardImg2 from "../images/pin-glasses.png";
import cardImg3 from "../images/pin-dark-hair.png";
import cardImg4 from "../images/pin-lights.png";
import cardImg5 from "../images/pin-long-hair.png";
import Profile from "./Profile";
import "../stylesheets/pages/_main.scss";

class Preview extends React.Component {
  render() {
    console.log("se consolea", this.props.data);
    return (
      <section className="gen-main__container">
        <div className="gen-main__container-inner">
          <button className="btn gen-main__btn--reset js-reset">Reset</button>
          <div className="gen-main__card">
            <h2 className="card__name-surname js-nameSurname">
              {this.props.data.fullName || "Nombre Apellido"}
            </h2>
            <h2 className="card__occupation js-occupation">
              {this.props.data.position || "Front-end developer"}
            </h2>
            <div className="card__photo js-image js__profile-image">
              <div className="js-div">
                <img
                  className="card__img-1"
                  src={cardImg1}
                  alt="Card Photo"
                  title="Imagen por defecto"
                />
                <img
                  className="card__img-2"
                  src={cardImg2}
                  alt="Card Photo"
                  title="Imagen por defecto"
                />
                <img
                  className="card__img-3"
                  src={cardImg3}
                  alt="Card Photo"
                  title="Imagen por defecto"
                />
                <img
                  className="card__img-4"
                  src={cardImg4}
                  alt="Card Photo"
                  title="Imagen por defecto"
                />
                <img
                  className="card__img-5"
                  src={cardImg5}
                  alt="Card Photo"
                  title="Imagen por defecto"
                />
              </div>
            </div>
            <nav className="card__contact">
              <div className="card__contact-container">
                <a
                  className="card__contact-call js-icons js-phone"
                  href={`tel:${this.props.data.telephone}`}
                  target="_blank"
                  alt="Call me"
                  title="Enlace al número de teléfono"
                >
                  <i className="fa fa-mobile fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="card__contact-container">
                <a
                  className="card__contact-email js-icons js-email"
                  href={`mailto:${this.props.data.email}`}
                  target="_blank"
                  alt="Email me"
                  title="Enlace al e-mail"
                >
                  <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="card__contact-container">
                <a
                  className="card__contact-linkedin js-icons js-linkedin"
                  href={`https://linkedin.com/in/${this.props.data.linkedin}`}
                  target="_blank"
                  alt="Find me on linkedIn"
                  title="Enlace a Linkedin"
                >
                  <i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>
                </a>
              </div>
              <div className="card__contact-container">
                <a
                  className="card__contact-github js-icons js-github"
                  href={`https://github.com/${this.props.data.github}`}
                  target="_blank"
                  alt="I'm on GitHub!"
                  title="Enlace a Github"
                >
                  <i className="fa fa-github-alt fa-2x" aria-hidden="true"></i>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </section>
    );
  }
}

export default Preview;
