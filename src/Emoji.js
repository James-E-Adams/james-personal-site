import React from "react";

const Emoji = ({ name, emoji }) => (
  <span role="img" aria-label={`${name}-emoji`}>
    {" "}
    {emoji}{" "}
  </span>
);

export default Emoji;
