import React from "react";

import AboutMe from "./AboutMe";
import Blog from "./Blog";

const Body = ({ tab, ...props }) => (
  <div {...props}>{tab === "aboutMe" ? <AboutMe /> : <Blog />}</div>
);

export default Body;
