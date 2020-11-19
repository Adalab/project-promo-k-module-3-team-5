import React from "react";
import designIcon from "../images/design.svg";

class Collapsable extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const openClassName = this.state.isOpen ? "js__hidden" : "";
    return (
      <>
        <div
          onClick={this.handleClick}
          className="customize-design__container js-collapsable"
          tabIndex="2"
        >
          <img
            className="customize-design__container-logo"
            src={designIcon}
            alt="Share logo"
          />
          <h2 className="customize-design__container-title">
            {this.props.title}
          </h2>
          <button className="customize-design__container-btn js-arrow"></button>
        </div>
        <div className={openClassName}>{this.props.children}</div>
      </>
    );
  }
}
export default Collapsable;
