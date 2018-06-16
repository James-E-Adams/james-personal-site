import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div className="min-h-screen text-center flex flex-col justify-between">
        <Header className="pt-3" />
        <AboutMe />
        <Footer className="pb-3" />
      </div>
    );
  }
}

export default App;
