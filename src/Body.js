import React from "react";

import AboutMe from "./AboutMe";
import Blog from "./Blog";
import ReadingList from "./ReadingList";
import Talks from "./Talks";

const Body = ({ tab, ...props }) => (
  <div className="pl-4 pr-4" {...props}>
    {tab === "aboutMe" ? (
      <AboutMe />
    ) : tab === "readingList" ? (
      <ReadingList />
    ) : tab === "blog" ? (
      <Blog />
    ) : (
      <Talks />
    )}
  </div>
);

export default Body;
