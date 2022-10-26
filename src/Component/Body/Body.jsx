import React from "react";
import "./Body.css";

const allLinks = {
  zuri: {
    title: "Zuri Team",
    url: "https://training.zuri.team/",
  },
  zuriBooks: {
    title: "Zuri Books",
    url: "https://books.zuri.team/",
  },
  pythonBooks: {
    title: "Python Books",
    url: "https://books.zuri.team/python-for-beginners?ref_id=<Hossanadev>",
  },
  bgChecks: {
    title: "Background Check for Coders",
    url: "https://background.zuri.team/"
  },
  designBook: {
    title: "Design Books",
    url: "https://books.zuri.team/design-rules/"
  }
};

const Body = (props) => {
  return (
    <>
        <div className="body">
            <a href={props.twiURL}>{props.twitter}</a>
        </div>
        <div className="body">
            <a href={allLinks.zuri.url}>{allLinks.zuri.title}</a>
        </div>
        <div className="body">
            <a href={allLinks.zuriBooks.url}>{allLinks.zuriBooks.title}</a>
        </div>
        <div className="body">
            <a href={allLinks.pythonBooks.url}>{allLinks.pythonBooks.title}</a>
        </div>
        <div className="body">
            <a href={allLinks.bgChecks.url}>{allLinks.bgChecks.title}</a>
        </div>
        <div className="body">
            <a href={allLinks.designBook.url}>{allLinks.designBook.title}</a>
        </div>
    </>
  )
}
export default Body;
