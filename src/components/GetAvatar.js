import React, { Component } from "react";
import PropTypes from "prop-types";

class GetAvatar extends Component {
  constructor(props) {
    super(props);

    this.fr = new FileReader();
    this.myFileField = React.createRef();

    this.handleFilePicker = this.handleFilePicker.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getPreview = this.getPreview.bind(this);
  }

  handleFilePicker() {
    this.myFileField.current.click();
  }

  uploadImage(e) {
    const myFile = e.currentTarget.files[0];
    this.fr.addEventListener("load", this.getImage);
    this.fr.readAsDataURL(myFile);
  }

  getImage() {
    const image = this.fr.result;
    this.props.updateAvatar(image);
  }

  getPreview(isDefault, image) {
    return !isDefault ? { backgroundImage: `url(${image})` } : { this.props.data.photo };
  }

  render() {
    const { isAvatarDefault, avatar } = this.props;
    return (
      <div className="customize-menu__form-box">
        <button
          className="customize-menu__form-box--button js__box-button"
          type="button"
          onClick={this.handleFilePicker}
        >
          Añadir imagen
        </button>

        <input
          type="file"
          id="img-selector"
          ref={this.myFileField}
          className="customize-menu__form-box-hidden js__box-button-hidden js-input"
          name="photo"
          onChange={this.uploadImage}
        />
        <div className="customize-menu__form-image">
          <div className="customize-menu__form-image--profile js__profile-image"></div>
          <div
            className="customize-menu__form-image--preview js__profile-preview"
            style={this.getPreview(isAvatarDefault, avatar)}
          ></div>
        </div>
      </div>
    );
  }
}

GetAvatar.propTypes = {
  isAvatarDefault: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  updateAvatar: PropTypes.func.isRequired,
};

export default GetAvatar;
