import React from "react";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import withState from "recompose/withState";

const App = ({ setTab, tab }) => (
  <div className="min-h-screen text-center flex flex-col justify-between">
    <Header setTab={setTab} tab={tab} className="pt-3" style={{ flex: 2 }} />
    <Body tab={tab} style={{ flex: 50 }} />
    <Footer className="pb-3" style={{ flex: 1 }} />
  </div>
);
export default withState("tab", "setTab", "aboutMe")(App);
