import React from "react";
import "../stylesheets/App.scss";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import Footer from "./Footer";
import inputsJson from "../data/inputsJson.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = {
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "",
    };
    this.updateAvatar = this.updateAvatar.bind(this);
  }
  updateAvatar(image) {
    // const { profile } = this.state;
    this.setState((prevState) => {
      // const newProfile = { ...profile, avatar: "image" };
      return {
        ...prevState,
        photo: image,
        /*profile: newProfile,*/
      };
    });
  }
  handleChangeInput(data) {
    console.log("app", data);
    this.setState({
      [data.inputName]: data.inputValue,
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="gen-main">
          <Preview data={this.state} />
          <Form
            inputsJson={inputsJson}
            handleChangeInput={this.handleChangeInput}
            data={this.state}
            updateAvatar={this.updateAvatar}
          />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
