import React from "react";
import withClassName from "./__lib__/react/withClassName";

import Emoji from "./Emoji";
const AboutMe = ({ className }) => (
  <div className={className}>
    <div className="flex flex-col">
      <div className="h-48 mt-8">
        <div>Hi! I'm James.</div>
        <span> I mostly do web stuff for </span>
        <a
          href="https://twitter.com/drawboard"
          className="text-blue no-underline"
        >
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
      </div>
      <div>
        When I'm not sitting/standing/dancing in front of the{" "}
        <Emoji name="computer" emoji="💻" />, you can find me drinking<Emoji
          emoji="☕"
          name="coffee"
        />or<Emoji name="climbing" emoji="🧗‍♂️" />.
      </div>
    </div>
  </div>
);

export default withClassName(
  "text-2xl ml-4 mr-4 pt-2 flex flex-col justify-center h-full"
)(AboutMe);
