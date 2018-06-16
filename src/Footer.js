import React from "react";
import { SocialIcon } from "react-social-icons";
import withClassName from "./__lib__/react/withClassName";

const Footer = props => (
  <div {...props}>
    <div>
      <SocialIcon className="mr-4" url="https://github.com/James-E-Adams" />
      <SocialIcon className="mr-4" url="https://twitter.com/jamesadams0" />
      <SocialIcon url="https://medium.com/@jamesadams0" />
    </div>
    <div className="mt-2 italic">
      Made with love on a lazy Saturday evening in June...
    </div>
  </div>
);

export default withClassName()(Footer);
