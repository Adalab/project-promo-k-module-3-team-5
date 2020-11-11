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
  }

  render() {
    return (
      <>
        <Header />
        <main className="gen-main">
          <Preview />
          <Form inputsJson={inputsJson} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
