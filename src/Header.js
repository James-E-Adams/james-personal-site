import React from "react";
import withClassName from "./__lib__/react/withClassName";
import Tabs from "./Tabs";

const Header = ({ className, setTab, tab, ...props }) => (
  <div className={className} {...props}>
    <h1 className="App-title text-black" />
    <img className="w-32 rounded-full mt-3 mb-2" src="me.jpg" />
    <Tabs setTab={setTab} tab={tab} />
  </div>
);

export default withClassName("bg-grey")(Header);
