import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Main = styled.div`
  width: 250px;
  height: auto;
  background-color:#000;
  position: absolute;
  margin:1rem 0rem;
  color:#fff;
  padding:1rem 0;
  
  
`

const Dropdownlist = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  li{
    padding: 3rem 0;
  }
`



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
    <Main>
      <Dropdownlist
        onClick={handleClick}
        className={"click" ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
                  <Link style={{color:'#fff',textDecoration:"none",fontSize:'1.3rem'}} to={item.path} onClick={() =>setClick(false)}>
                  {item.title}
                  </Link>
            </li>
          );
        })}
      </Dropdownlist>
    </Main>
  );
};
export default FirstDropdown;
