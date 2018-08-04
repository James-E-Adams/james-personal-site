import React from "react";

import AboutMe from "./AboutMe";
import Blog from "./Blog";
import ReadingList from "./ReadingList";

const Body = ({ tab, ...props }) => (
  <div {...props}>
    {tab === "aboutMe" ? (
      <AboutMe />
    ) : tab === "readingList" ? (
      <ReadingList />
    ) : (
      <Blog />
    )}
  </div>
);

export default Body;
