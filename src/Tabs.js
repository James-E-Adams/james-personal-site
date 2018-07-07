import React from "react";
import withHandlers from "recompose/withHandlers";
import withPropsOnChange from "recompose/withPropsOnChange";
import compose from "recompose/compose";
import withClassName from "./__lib__/react/withClassName";

const Divider = withClassName(["text-4xl"])(({ className }) => (
  <span className={className}>|</span>
));

const Tabs = ({
  setTabToAboutMe,
  setTabToBlog,
  aboutMeClassName,
  blogClassName
}) => (
  <div>
    <span onClick={setTabToBlog} className={blogClassName}>
      Musings
    </span>
    <Divider className="ml-3 mr-3" />
    <span onClick={setTabToAboutMe} className={aboutMeClassName}>
      Me
    </span>
  </div>
);

const setTabToAboutMe = ({ setTab }) => e => setTab("aboutMe");
const setTabToBlog = ({ setTab }) => e => setTab("blog");

const tabClassNames = ({ tab }) => ({
  aboutMeClassName: ["text-3xl", tab === "aboutMe" && "font-bold"],
  blogClassName: ["text-3xl", tab === "blog" && "font-bold"]
});

export default compose(
  withHandlers({ setTabToAboutMe, setTabToBlog }),
  withPropsOnChange(["tab"], tabClassNames),
  withClassName(null, "blogClassName"),
  withClassName(null, "aboutMeClassName")
)(Tabs);
