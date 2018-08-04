import React from "react";

const currentlyReading = [
  { name: "Atlas Shrugged", author: "Ayn Rand" },
  {
    name: "Antifragile",
    author: "Nassim Nicholas Taleb"
  },
  {
    name: "פתאום דפיקה בדלת",
    author: "אתגר קרת"
  },
  {
    name: "Professor Frisby's Mostly Adequate Guide to Functional Programming",
    author: "Brian Lonsdorf"
  },
  {
    name: "The Republic",
    author: "Plato"
  }
];
const Blog = () => (
  <div className="mt-6">
    {currentlyReading.map(book => <Book {...book} />)}
    <div className="text-xl mt-8">
      {" "}
      Past books (since maintaining this list){" "}
    </div>
  </div>
);

const Book = ({ name, author }) => (
  <div className="mb-2">
    <span className="italic"> {name} </span> -
    <span className> {author} </span>
  </div>
);
export default Blog;
