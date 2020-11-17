import React from "react";
import keyboardIcon from "../images/keyboard.svg";
import inputsJson from "../data/inputsJson.json";
import Input from "./Input";

class Fill extends React.Component {
  constructor(props) {
    super(props);

    this.renderInfo = this.renderInfo.bind(this);
    // this.renderData = this.renderData.bind(this);
  }

  renderInfo() {
    return inputsJson.map((inputJson) => {
      return (
        <Input
          key={inputJson.id}
          inputJson={inputJson}
          handleChangeInput={this.props.handleChangeInput}
        />
      );
    });
  }

  // renderData() {
  //   const info = this.props.data;
  //   return info.map((value, index) => {
  //     return <Input key={index} value={value} />;
  //   });
  // }

  render() {
    console.log(this.props.data);
    return (
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
          {this.renderInfo()}
          {/* {this.renderData()} */}

          <p className="js__error-message-name js__hidden">Demasiado largo</p>

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
              // name=""
              id="img-selector"
              className="customize-menu__form-box-hidden js__box-button-hidden js-input"
              name="photo"
            />

            <div className="customize-menu__form-image">
              <div className="customize-menu__form-image--profile js__profile-image"></div>
              <div className="customize-menu__form-image--preview js__profile-preview"></div>
            </div>
          </div>
        </form>
      </section>
    );
  }
}
export default Fill;
