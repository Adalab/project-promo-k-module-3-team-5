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
          {this.props.labelText}
        </label>
        <input
          className={`customize-menu__form-input js-input ${this.props.className}`}
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
