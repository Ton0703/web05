import React from "react";
import "./index.scss";

const items = [
  {
    url: "/image/4.jpg",
    time: "2020/05/09",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    url: "/image/5.jpg",
    time: "2020/05/09",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    url: "/image/6.jpg",
    time: "2020/05/09",
    title: "Lorem ipsum dolor sit amet.",
  },
  {
    url: "/image/7.jpg",
    time: "2020/05/09",
    title: "Lorem ipsum dolor sit amet.",
  },
];

function List() {
  return (
    <div className="list-wrapper">
      {items.map((item, index) => (
        <div className="item">
          <div className="item-img">
            <img src={item.url} alt="" />
          </div>
          <div className="info">
            <div className="item-time">{item.time}</div>
            <div className="item-title">{item.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
