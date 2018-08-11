import React from "react";
import withHandlers from "recompose/withHandlers";
import compose from "recompose/compose";
import withClassName from "./__lib__/react/withClassName";

const Divider = withClassName(["text-4xl"])(({ className }) => (
  <span className={className}>|</span>
));

const Tabs = ({
  setTabToAboutMe,
  setTabToBlog,
  setTabToReadingList,
  setTabToTalks,
  aboutMeClassName,
  blogClassName,
  readingListClassName,
  talksClassName
}) => (
  <div>
    <span onClick={setTabToBlog} className={blogClassName}>
      Musings
    </span>
    <Divider className="ml-3 mr-3" />
    <span onClick={setTabToAboutMe} className={aboutMeClassName}>
      Me
    </span>
    <Divider className="ml-3 mr-3" />
    <span onClick={setTabToReadingList} className={readingListClassName}>
      Currently reading
    </span>
    <Divider className="ml-3 mr-3" />
    <span onClick={setTabToTalks} className={talksClassName}>
      Talks
    </span>
  </div>
);

const setTabFy = name => ({ setTab }) => () => setTab(name);

const setTabToAboutMe = setTabFy("aboutMe");
const setTabToBlog = setTabFy("blog");
const setTabToReadingList = setTabFy("readingList");
const setTabToTalks = setTabFy("talks");

const tabClassNameFy = name => ({ tab }) => [
  "text-3xl",
  tab === name && "font-bold"
];

const classNames = {
  aboutMeClassName: tabClassNameFy("aboutMe"),
  blogClassName: tabClassNameFy("blog"),
  readingListClassName: tabClassNameFy("readingList"),
  talksClassName: tabClassNameFy("talks")
};

export default compose(
  withHandlers({
    setTabToAboutMe,
    setTabToBlog,
    setTabToReadingList,
    setTabToTalks
  }),
  withClassName(classNames)
)(Tabs);
