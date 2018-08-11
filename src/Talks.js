import React from "react";

const Talks = () => (
  <div className="mt-6 w-100">
    <div className="mb-6 text-xl font-bold"> Slides from past talks</div>
    <Talk
      src="https://docs.google.com/presentation/d/e/2PACX-1vRmyoQerM4kOtgcSJbkSgiPSsBV3VLiDZIM55rmeVaLYxLcGeHVuUO1iEJiSLrk2eI068gUpenCsj6E/embed?start=false&loop=false&delayms=60000"
      frameborder="0"
      width="80%"
      allowfullscreen="true"
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      title="Sneaking React Native into iOS apps"
      context="MelbJS, June 2018"
    />{" "}
  </div>
);

const Talk = ({ title, context, ...props }) => (
  <div>
    <div>
      <div className="mb-4">
        <span className="italic">{title}</span>
        <span> - </span>
        <span>{context}</span>
      </div>
      <iframe width="80%" height="400px" {...props}>
        {" "}
      </iframe>
    </div>
  </div>
);
export default Talks;
