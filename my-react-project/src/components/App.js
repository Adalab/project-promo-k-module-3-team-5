import React from "react";
import "../stylesheets/App.scss";
import logo from "../images/awesome-1.svg";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <a href="./index.html">
          <img
            src={logo}
            alt="Logo Awesome Profile Cards"
            title="Awesome Profile Cards"
            className="header__logo"
          />
        </a>
      </header>
    );
  }
}

export default App;
