import React from "react";
import designIcon from "../images/design.svg";

class Design extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Design;
