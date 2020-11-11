import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import "../stylesheets/pages/_main.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="gen-main__customize">
        <Design />
        <Fill inputsJson={this.props.inputsJson} />
        <Share />
      </nav>
    );
  }
}

export default Form;
