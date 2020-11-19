import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import "../stylesheets/pages/_main.scss";
import Collapsable from "./Collapsable";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="gen-main__customize">
        <Collapsable title="Diseña">
          <Design />
        </Collapsable>
        <Collapsable>
          <Fill
            inputsJson={this.props.inputsJson}
            handleChangeInput={this.props.handleChangeInput}
            data={this.props.data}
            updateAvatar={this.props.updateAvatar}
          />
        </Collapsable>
        <Collapsable>
          <Share />
        </Collapsable>
      </nav>
    );
  }
}

export default Form;
