import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
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
  ul li .link {
    cursor: pointer;
    text-decoration: none;
    color: #000;
  }
`;
const Blog = styled.div`
  .link {
    text-decoration: none;
    letter-spacing: 0.2rem;
    font-weight: 320;
    font-size: 1.5rem;
    color: #000;
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
  animation: animation-one 1.5s alternate forwards;

  @keyframes animation-one {
    from {
      transform: translateY(0);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  li {
    margin: 0.5rem 0;
  }
  li .Flink {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
`;

const MainNav = () => {
  const [dropdown, setDropDown] = useState(false);

  const firstDropDownHandler = () => {
    setDropDown(!dropdown);
  }

  // When someone click on link so dropdown hide and user go to another page
  const hideDropDownHandler = () => {
    setDropDown(false);
  }

  return (
    <Nav>
      <Logo>THE GOODHART GROUP</Logo>
      <Dropdowns>
        <ul>
          <li>
            <Link className="link" to="/" onClick={firstDropDownHandler}>
              Our Guides <IoMdArrowDropdown />
            </Link>
            {dropdown && (
              <FirstDropDown>
                <li>
                  <Link className="Flink" to="/Our-LifeStle-Guides" onClick={hideDropDownHandler}>
                    Our Lifestyle Guides
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/Our-Buying-Guides" onClick={hideDropDownHandler}>
                    Our Buying Guides
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/" onClick={hideDropDownHandler}>
                    For Sellers
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/" onClick={hideDropDownHandler}>
                    For Downsizing
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/" onClick={hideDropDownHandler}>
                    For Condos
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/" onClick={hideDropDownHandler}>
                    Get All Our Guides
                  </Link>
                </li>
                <li>
                  <Link className="Flink" to="/" onClick={hideDropDownHandler}>
                    The Collection Magazine by Compass
                  </Link>
                </li>
              </FirstDropDown>
            )}
          </li>
          <li>
            <Link className="link" to="/">
              Selling
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Buying
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Listing
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Our Team
            </Link>
          </li>
        </ul>
      </Dropdowns>
      <Blog>
        <Link className="link" to="/">
          Blog
        </Link>
      </Blog>
    </Nav>
  );
};
export default MainNav;
