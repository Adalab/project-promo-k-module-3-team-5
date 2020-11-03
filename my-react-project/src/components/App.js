import React from "react";
import "../stylesheets/App.scss";
import logo from "../images/awesome-1.svg";
import logoFooter from "../images/emyem.png";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
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
        <footer role="contentinfo" className="footer">
          <small className="footer__small">Awesome profile-cards @2020</small>
          <img
            src={logoFooter}
            alt="Logo de Adalab"
            title="Adalab, escuela digital especializada para mujeres"
            className="footer__logo"
          />
        </footer>
      </>
    );
  }
}

export default App;
