import React from "react";

const Share = (props) => {
  const sendRequest = () => {
    props.sendRequest();
  };

  return (
    <>
      <section className="gen-main__customize-share ">
        <a
          className="customize-share__button  js-section js-createBtn js-cardCreated"
          title="Crear la tarjeta"
          href=""
          target="_blank"
          onClick={sendRequest}
        >
          Crear tarjeta
        </a>
      </section>

      <section className=" gen-main__customize-share--hidden js__hiddenlink js-sectionHidden">
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
};

export default Share;
