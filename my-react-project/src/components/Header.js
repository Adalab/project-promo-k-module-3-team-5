import React from "react";
import logo from "../images/awesome-1.svg";

class Header extends React.Component {
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

export default Header;
