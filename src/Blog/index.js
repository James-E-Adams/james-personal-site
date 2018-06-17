import React from "react";
import Preview from "./Preview";

const Blog = () => (
  <div className="mt-3">
    <div className="mb-4">
      I generally tend to write on medium, but occassionally I may write here
      too. 🤷‍♀️
    </div>
    <Preview title="Sample blog post" />
    <div className="border border-black" />
  </div>
);

export default Blog;
