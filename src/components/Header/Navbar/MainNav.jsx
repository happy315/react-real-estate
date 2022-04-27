import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 0.15rem solid var(--primary-border-color);
  padding: 0.8rem 6rem;
`;
const Logo = styled.div`
  font-size: 1.2rem;
`;
const Dropdowns = styled.div`
  ul {
    list-style: none;
    display: flex;
  }
  ul li {
    padding: 0rem 2rem;
    font-size: 1.2rem;
  }
`;
const Blog = styled.div`
  h4 {
    letter-spacing: 0.2rem;
    font-weight: 320;
    font-size: 1.5rem;
  }
`;

const MainNav = () => {
  return (
    <Nav>
      <Logo>THE GOODHART GROUP</Logo>
      <Dropdowns>
        <ul>
          <li>Our Guides</li>
          <li>Selling</li>
          <li>Buying</li>
          <li>Listing</li>
          <li>Our Team</li>
        </ul>
      </Dropdowns>
      <Blog>
        <h4>Blog</h4>
      </Blog>
    </Nav>
  );
};
export default MainNav;
