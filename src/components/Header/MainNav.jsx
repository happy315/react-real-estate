import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const FirstDropDownItems = [
  {
    id: "1",
    title: "Our Lifestyle Guides",
    path: "/Our-LifeStle-Guides",
  },
  {
    id: "2",
    title: "Our Buying Guides",
    path: "/Our-Buying-Guides",
  },
  {
    id: "3",
    title: "For Sellers",
    path: "/For-Sellers",
  },
  {
    id: "4",
    title: "For Downsizing",
    path: "/For-Downsizing",
  },
  {
    id: "5",
    title: "For Condos",
    path: "/For-Condos",
  },
  {
    id: "6",
    title: "Get All Our Guides",
    path: "/Get-All-Our-Guides",
  },
  {
    id: "7",
    title: "The Collection Magazine by Compass",
    path: "/The-Collection-Magazine-By-Compass",
  },
];
const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.15rem solid var(--primary-border-color);
  padding: 0.8rem 6rem;
  z-index: 99;
`;
const Logo = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
`;
const Dropdowns = styled.div`
  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    padding: 0rem 2rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  ul li:hover {
    color: green;
  }
`;
const Blog = styled.div`
  color: #000;

  .blog {
    text-decoration: none;
    letter-spacing: 0.2rem;
    font-weight: 320;
    font-size: 1.5rem;
    color: #000;
  }
`;
// Below i write the code of animation
const animation_one = keyframes`
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
`;
const FirstDropDown = styled.ul`
  width: 250px;
  background-color: #000;
  position: absolute;
  top: 6.2rem;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${animation_one} 1.5s alternate forwards;

  li {
    margin: 0.5rem 0;
  }
  li .Flink {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
  li .Flink:hover {
    color: #f709d4;
    font-size: 1.3rem;
  }
`;
// I write the code of animation below with help of keyframe

const MainNav = () => {
  const [open, setOpen] = useState(false);
  const dropdownref = useRef();
  
  return (
    <Nav>
      <Logo>THE GOODHART GROUP</Logo>
      <Dropdowns>
        <ul>
          <li className="link" onClick={dropdownHandler}>
            Our Guides
            <IoMdArrowDropdown style={{ position: "relative", top: "3px" }}/>
              <FirstDropDown onMouseLeave={dropdownHandler} ref={dropdownref}>
                {FirstDropDownItems.map((element) => {
                  return (
                    <li key={element.id}>
                      <Link
                        className="Flink"
                        to={element.path}
                        onClick={dropdownHandler}
                      >
                        {element.title}
                      </Link>
                    </li>
                  );
                })}
              </FirstDropDown>
            
          </li>
          <li className="link">
            Selling
            <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          </li>
          <li className="link">
            Buying
            <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          </li>
          <li className="link">
            Listing
            <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          </li>
          <li className="link">
            Our Team
            <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          </li>
        </ul>
      </Dropdowns>
      <Blog>
        <Link className="blog" to="/Blog">
          Blog
        </Link>
      </Blog>
    </Nav>
  );
};
export default MainNav;
