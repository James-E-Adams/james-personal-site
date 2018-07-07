import React from "react";
import withClassName from "__lib__/react/withClassName";

const Preview = ({ title, preview, ...props }) => (
  <div {...props}>
    <div className="text-5xl"> {title} </div>{" "}
  </div>
);

export default withClassName("text-left")(Preview);
