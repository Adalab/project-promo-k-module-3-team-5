import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import inputsJson from "../data/inputsJson.json";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: 1,
    };
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangePalette = this.handleChangePalette.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  updateAvatar(image) {
    this.setState({ photo: image });
  }

  handleChangeInput(data) {
    this.setState({
      [data.inputName]: data.inputValue,
    });
  }

  handleChangePalette(paletteValue) {
    if (paletteValue === "greenpalette") {
      this.setState({ palette: 1 });
    } else if (paletteValue === "orangepalette") {
      this.setState({ palette: 2 });
    } else if (paletteValue === "bluepalette") {
      this.setState({ palette: 3 });
    }
  }

  handleReset() {
    this.setState({
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
      palette: 1,
    });
  }

  //LOCAL STORAGE
  componentDidMount() {
    this.getFromLocalStorage();
  }

  componentDidUpdate() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    localStorage.setItem("data", JSON.stringify(this.state));
  }

  getFromLocalStorage() {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      console.log(data);
      this.setState({
        name: data.name,
        job: data.job,
        email: data.email,
        phone: data.phone,
        linkedin: data.linkedin,
        github: data.github,
        photo: data.photo,
        palette: data.palette,
      });
    }
  }

  render() {
    return (
      <>
        <Header />
        <main className="gen-main">
          <Preview data={this.state} handleReset={this.handleReset} />
          <Form
            inputsJson={inputsJson}
            handleChangeInput={this.handleChangeInput}
            data={this.state}
            updateAvatar={this.updateAvatar}
            handleChangePalette={this.handleChangePalette}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default CardGenerator;
