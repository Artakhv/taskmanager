import React, { Component } from "react";
import Footer from "./components/header_footer/Footer";
import Header from "./components/header_footer/Header";
import Main from "./components/routes";

export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div
          style={{
            background: "#fefefe",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <Main />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
