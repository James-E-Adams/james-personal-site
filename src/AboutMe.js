import React from "react";
import withClassName from "./__lib__/react/withClassName";

const AboutMe = ({ className }) => (
  <div className={className}>
    <span className="mr-1">Hi! I'm James. I mostly do web stuff for</span>
    <a href="https://twitter.com/drawboard" className="text-blue no-underline">
      @drawboard
    </a>
    <span>.</span>
    <div>
      <span className="mr-1">Sometimes I pretend I'm a</span>
      <a
        href="https://medium.com/@jamesadams0/a-one-week-stand-with-react-native-or-how-deep-do-we-plunge-cbb6ca44bb54"
        className="text-blue no-underline"
      >
        mobile developer
      </a>
      <span>.</span>
    </div>
    <div className="mt-3">
      When I'm not sitting/standing/dancing in front of the 💻, you can find me
      drinking ☕ or 🧗‍♂️.
    </div>
  </div>
);

export default withClassName("text-2xl")(AboutMe);
