import React from "react";
import withClassName from "./__lib__/react/withClassName";

const Header = ({ className }) => (
  <div className={className}>
    <img alt="Me" class="w-32 rounded-full mt-3 mb-2" src="me.jpg" />
  </div>
);

export default withClassName("bg-grey")(Header);
