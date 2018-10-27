import React from "react"

const booksList = [
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
    name: "GEB",
    author: "Douglas Hofstadter"
  },
  {
    name: "Zero to One: Notes on Startups, or How to Build the Future",
    link: "https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296",
    author: "Peter Thiel",
    finished: true
  }
]

const finishedBooks = booksList.filter(book => book.finished)
const currentlyReadingBooks = booksList.filter(book => !book.finished)

const Blog = () => (
  <div className="mt-6">
    {currentlyReadingBooks.map(book => (
      <Book {...book} />
    ))}
    <div className="text-xl font-bold mt-8 mb-8">
      {" "}
      Past books (since maintaining this list){" "}
    </div>
    {finishedBooks.map(book => (
      <Book {...book} />
    ))}
  </div>
)

const Book = ({ name, author, link }) => (
  <div className="mb-2">
    <a className="italic" href={link}>
      {" "}
      {name}{" "}
    </a>{" "}
    -<span className> {author} </span>
  </div>
)
export default Blog
