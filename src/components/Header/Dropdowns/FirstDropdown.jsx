import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    title: "Our Lifestyle Guide",
    path: "/Lifestyle",
  },
  {
    title: "Our Buying Guide",
    path: "/Buying",
  },
  {
    title: "For Sellers",
    path: "/Sellers",
  },
  {
    title: "For Buyers",
    path: "/Buyers",
  },
  {
    title: "For Downsizing",
    path: "/DownSizing",
  },
  {
    title: "For condos",
    path: "/Condos",
  },
  {
    title: "Get All Our GUides",
    path: "/All-Guides",
  },
  {
    title: "The Collection Magazine By Compass",
    path: "/Collection-Magazine-By-Compass",
  },
];
const FirstDropdown = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <ul
        onClick={handleClick}
        className={"click" ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
                  <Link to={item.path} onClick={() =>setClick(false)}>
                  {item.title}
                  </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FirstDropdown;
