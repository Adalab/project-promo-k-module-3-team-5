import React from "react";

class Share extends React.Component {
  render() {
    return (
      <>
        <section className="gen-main__customize-share ">
          {/* <div className="customize-share__container js-collapsable">
            <img
              className="customize-share__container-logo"
              // src={shareIcon}
              alt="Design profile area"
            />
            <h2 className="customize-share__container-title">Comparte</h2>
            <button className="customize-share__container-btn js-arrow"></button>
          </div> */}
          <a
            className="customize-share__button  js-section js-createBtn js-cardCreated"
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
      </>
    );
  }
}

export default Share;
