import React from "react";
import designIcon from "../images/design.svg";
import keyboardIcon from "../images/keyboard.svg";
import shareIcon from "../images/share.svg";

class Form extends React.Component {
  render() {
    return (
      <nav className="gen-main__customize">
        <section className="gen-main__customize-design">
          <div
            className="customize-design__container js-collapsable"
            tabindex="2"
          >
            <img
              className="customize-design__container-logo"
              src={designIcon}
              alt="Share logo"
            />
            <h2 className="customize-design__container-title">Diseña</h2>
            <button className="customize-design__container-btn js-arrow"></button>
          </div>

          <form
            className="customize-design__colors js__hidden js-section"
            action=""
            method="GET"
          >
            <h2 className="customize-design__colors-title">Colores</h2>
            <label
              className="customize-design__colors1 js-customize-design__colors"
              for="colors1"
              id="customize-design__colors1"
            >
              <input
                className="customize-design__colors1-selection js-customize-design__colors1-selection"
                type="radio"
                id="colors1"
                value="greenpalette"
                name="colors"
              />

              <div className="customize-design__colors1-boxes1"></div>
              <div className="customize-design__colors1-boxes2"></div>
              <div className="customize-design__colors1-boxes3"></div>
            </label>
            <label
              className="customize-design__colors2 js-customize-design__colors"
              for="colors2"
              id="customize-design__colors2"
            >
              <input
                className="customize-design__colors2-selection js-customize-design__colors1-selection"
                type="radio"
                id="colors2"
                value="orangepalette"
                name="colors"
              />
              <div className="customize-design__colors2-boxes1"></div>
              <div className="customize-design__colors2-boxes2"></div>
              <div className="customize-design__colors2-boxes3"></div>
            </label>
            <label
              className="customize-design__colors3 js-customize-design__colors"
              for="colors3"
              id="customize-design__colors3"
            >
              <input
                className="customize-design__colors3-selection js-customize-design__colors1-selection"
                type="radio"
                id="colors3"
                value="bluepalette"
                name="colors"
              />
              <div className="customize-design__colors3-boxes1"></div>
              <div className="customize-design__colors3-boxes2"></div>
              <div className="customize-design__colors3-boxes3"></div>
            </label>
          </form>
        </section>

        {/* section rellena */}
        <section className="gen-main__customize-menu">
          <div className="customize-menu__container js-collapsable">
            <img
              className="customize-menu__container-logo"
              src={keyboardIcon}
              alt="keyboard icon"
            />
            <h2 className="customize-menu__container-title">Rellena</h2>
            <button className="customize-menu__container-btn js-arrow"></button>
          </div>
          <form
            className="customize-menu__form js__hidden js-section"
            action=""
            method="post"
          >
            <label className="customize-menu__form-label" htmlFor="fullName">
              Nombre completo
            </label>
            <input
              className="customize-menu__form-input js-input js-input-name"
              placeholder="Ej: Sally Jill"
              type="text"
              required
              id="fullName"
              name="name"
            />
            <p className="js__error-message-name js__hidden">Demasiado largo</p>
            <label className="customize-menu__form-label" htmlFor="position">
              Puesto
            </label>
            <input
              className="customize-menu__form-input js-input js-input-job"
              placeholder="Ej: Front end"
              type="text"
              required
              id="position"
              name="job"
            />
            <p className="js__error-message-job js__hidden">Demasiado largo</p>
            <div className="customize-menu__form-box">
              <button
                className="customize-menu__form-box--button js__box-button"
                type="button"
              >
                Añadir imagen
              </button>
              <input
                type="file"
                name=""
                id="img-selector"
                className="customize-menu__form-box-hidden js__box-button-hidden js-input"
                name="photo"
              />

              <div className="customize-menu__form-image">
                <div className="customize-menu__form-image--profile js__profile-image"></div>
                <div className="customize-menu__form-image--preview js__profile-preview"></div>
              </div>
            </div>
            <label className="customize-menu__form-label" htmlFor="email">
              Email
            </label>
            <input
              className="customize-menu__form-input js-input js-input-email"
              placeholder="Ej: sally.hill@gmail.com"
              type="email"
              required
              id="email"
              name="email"
            />
            <label className="customize-menu__form-label" htmlFor="telephone">
              Teléfono{" "}
            </label>
            <input
              className="customize-menu__form-input js-input js-input-phone"
              placeholder="Ej: 555-555-555"
              type="tel"
              required
              id="telephone"
              name="phone"
            />
            <label className="customize-menu__form-label" htmlFor="linkedin">
              Linkedin{" "}
            </label>
            <input
              className="customize-menu__form-input js-input js-input-linkedin"
              placeholder="Ej: linkedin.com/in/sally-hill"
              type="text"
              required
              id="linkedin"
              name="linkedin"
            />
            <label className="customize-menu__form-label" htmlFor="github">
              Github{" "}
            </label>
            <input
              className="customize-menu__form-input js-input js-input-github"
              placeholder="Ej: @sally-hill"
              type="text"
              required
              id="github"
              name="github"
            />
          </form>
        </section>

        {/* section comparte */}
        <section className="gen-main__customize-share ">
          <div className="customize-share__container js-collapsable">
            <img
              className="customize-share__container-logo"
              src={shareIcon}
              alt="Design profile area"
            />
            <h2 className="customize-share__container-title">Comparte</h2>
            <button className="customize-share__container-btn js-arrow"></button>
          </div>
          <a
            className="customize-share__button js__hidden js-section js-createBtn js-cardCreated"
            title="Crear la tarjeta"
            href=""
            target="_blank"
          >
            Crear tarjeta
          </a>
        </section>
        <section className="gen-main__customize-share--hidden js__hiddenlink js-sectionHidden">
          <p className="customize-share__text--hidden">
            La tarjeta ha sido creada:
          </p>
          <a
            className="js-twitter-url customize-share__web--hidden"
            href=""
            target="_blank"
          ></a>
          <a className="customize-share__twitter--hidden" href="">
            Compartir en twitter
          </a>
        </section>
      </nav>
    );
  }
}

export default Form;
