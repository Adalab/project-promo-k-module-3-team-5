import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <label
          className="customize-menu__form-label"
          htmlFor={this.props.htmlFor}
        >
          Nombre completo
        </label>
        <input
          className="customize-menu__form-input js-input js-input-name"
          placeholder={this.props.placeholder}
          type={this.props.type}
          required
          id={this.props.id}
          name={this.props.nameInfo}
        />
      </>
    );
  }
}

export default Input;
