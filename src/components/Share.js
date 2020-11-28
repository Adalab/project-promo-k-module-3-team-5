import React, { useState } from "react";

const Share = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const sendRequest = () => {
    props.sendRequest();
    setIsHidden(false);
    const [twitter] = useState(
      encodeURIComponent(
        "He creado una tarjeta de visita gracias a las <!Surrender/>"
      )
    );
  };

  return (
    <>
      <section className="gen-main__customize-share ">
        <a
          title="Crear la tarjeta"
          href=""
          target="_blank"
          onClick={sendRequest}
          disabled={props.isClickable ? false : true}
          className={
            props.isClickable
              ? "customize-share__button  js-section js-createBtn js-cardCreated"
              : "customize-share__button  js-section js-createBtn"
          }
        >
          Crear tarjeta
        </a>
      </section>

      <section
        className={
          isHidden
            ? "gen-main__customize-share--hidden js__hiddenlink js-sectionHidden"
            : "gen-main__customize-share--hidden js__hiddenlink"
        }
      >
        {props.apiCardUrl ? (
          <>
            <p className="customize-share__text--hidden">
              La tarjeta ha sido creada:
            </p>

            <a
              className="js-twitter-url customize-share__web--hidden"
              href={props.apiCardUrl}
              title="card Link"
              target="_blank"
            >
              {props.apiCardUrl}
            </a>
          </>
        ) : (
          <>
            <h3 className="share__finish--title">Error:</h3>
            <p className="card-link">{props.apiError}</p>
          </>
        )}
        <a
          className="customize-share__twitter--hidden"
          href={`https://twitter.com/intent/tweet?text=${twitter}&url=${props.apiCardUrl}`}
        >
          Compartir en twitter
        </a>
        )
      </section>
    </>
  );
};

export default Share;
