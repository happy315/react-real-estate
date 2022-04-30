import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Menuitems = [
  {
    title: "Our Lifestyle Guides",
    to: "/Our-Lifestyle-Guides",
  },
  {
    title: "Our Buying Guides",
    to: "/Our-Buying-Guides",
  },
  {
    title: "For Sellers",
    to: "/For-sellers",
  },
  {
    title: "For Downsizing",
    to: "/For-Downsizing",
  },
  {
    title: "For Condos",
    to: "/For-Condos",
  },
  {
    title: "Get All Our Guides",
    to: "/Get All Our Guides",
  },
  {
    title: "The Collection Magazine By Compass",
    to: "/Get All Our Guides",
  },
];
const Fdropdown = styled.div`
  width: 250px;
  height: auto;
  display: block;
  position: absolute;
  top: 100px;
  padding: 1rem 0rem;
  background-color: #000;
  .hide {
    display: none;
  }
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  li {
    padding: 2rem 0;
  }
  li .link {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    padding: 1rem 0;
  }
`;

const FirstDropdown = () => {

  
  return (
    <Fdropdown>
      <List>
        {Menuitems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.to}  className="link">
                {item.title}
              </Link>
            </li>
          );
        })}
      </List>
    </Fdropdown>
  );
};
export default FirstDropdown;
