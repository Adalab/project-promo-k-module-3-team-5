import React from "react";
import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";
import "../stylesheets/pages/_main.scss";

class Form extends React.Component {
  render() {
    return (
      <nav className="gen-main__customize">
        <Design />
        <Fill />
        <Share />
      </nav>
    );
  }
}

export default Form;
