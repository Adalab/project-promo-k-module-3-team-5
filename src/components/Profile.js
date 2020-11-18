import React, { Component } from "react";
import cardImg1 from "../images/pin-long-brown-hair.png";
import cardImg2 from "../images/pin-glasses.png";
import cardImg3 from "../images/pin-dark-hair.png";
import cardImg4 from "../images/pin-lights.png";
import cardImg5 from "../images/pin-long-hair.png";
import PropTypes from "prop-types";

class Profile extends Component {
  render() {
    if (this.props.photo == "") {
      console.log("entro en if");
    } else {
      this.props.pho;
      // <img
      //   className="card__photo"
      //   src={this.props.photo}
      //   alt={this.props.photo}
      // />;
    }
    return (
      <div className="card__photo js-image js__profile-image">
        <div className="js-div">
          <img
            className="card__img-1"
            src={cardImg1}
            alt="Card Photo 1"
            title="Imagen por defecto 1"
          />
          <img
            className="card__img-2"
            src={cardImg2}
            alt="Card Photo 2"
            title="Imagen por defecto 2"
          />
          <img
            className="card__img-3"
            src={cardImg3}
            alt="Card Photo 3"
            title="Imagen por defecto 3"
          />
          <img
            className="card__img-4"
            src={cardImg4}
            alt="Card Photo 4"
            title="Imagen por defecto 4"
          />
          <img
            className="card__img-5"
            src={cardImg5}
            alt="Card Photo 5"
            title="Imagen por defecto 5"
          />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
