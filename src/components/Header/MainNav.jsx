import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const Nav = styled.ul`
  width: 100vw;
  position: fixed;
  top: 2rem;
  left: 0;
  max-height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 12rem;
  border-bottom: 0.1rem solid #fff;
  background-color: var(--transparent-color);
  z-index: 99;

  > li {
    color: var(--secondary-color);
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Dropdown = styled.ul`
  position: absolute;
  top: 4.1rem;
  width: 200px;
  padding: 0rem 1rem;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  z-index: 99;
  background-color: var(--primary-background-color);
  color: black;
  padding: 1rem 0.5rem;
  box-shadow: 0 0 8px 4px rgb(0 0 0 / 20%);
  .active {
    display: flex;
  }
`;

const StyledLink = styled(Link)`
  color: var(--secondary-background-color);
  text-decoration: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0.35rem 0rem;
`;
const DLink = styled.li`
  &:hover > ul{
  display: flex;
 }
`;

const MainNav = () => {
  const navref = useRef();
  useEffect(() => {
    const li = document.querySelectorAll(".nav >li");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navref.current.style.backgroundColor = "white";
        navref.current.style.borderBottom = "0.1rem solid black";
        navref.current.style.borderTop = "0.1rem solid black";
        navref.current.style.transition = "0.1s all";
        li.forEach((listItem) => {
          listItem.style.color = "black";
        });
      } else if (window.scrollY === 0) {
        navref.current.style.backgroundColor = "transparent";
        navref.current.style.borderTop = "none";
        navref.current.style.borderBottom = "0.1rem solid white";
        navref.current.style.transition = "0.1s all";
        li.forEach((listItem) => {
          listItem.style.color = "white";
        });
      }
    });
  }, []);

  return (
    <Nav className="nav" ref={navref}>
      <li style={{ position: "relative", right: "2rem" }}>Logo</li>
      <DLink>
        Our guides
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown>
          <StyledLink to="/our-lifestyle-guide">Our Lifestyle Guide</StyledLink>
          <StyledLink to="/Our-buying-guide">Our Buying Guide</StyledLink>
          <StyledLink to="/for-sellers">For sellers</StyledLink>
          <StyledLink to="/for-downsizing">For Downsizing</StyledLink>
          <StyledLink to="/for-condos">For Condos</StyledLink>
          <StyledLink to="/all-guides">Get All Our Guides</StyledLink>
          <StyledLink to="/compass">
            The Collection Magazine by Compass
          </StyledLink>
        </Dropdown>
      </DLink>

      <DLink>
        Selling
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown style={{ width: "200px", marginRight: "8rem" }}>
          <StyledLink to="/selling-with-us">Selling With Us</StyledLink>
          <StyledLink to="/selling-new-homes">Selling New Homes</StyledLink>
          <StyledLink to="/your-homeworth">What Is Your Home Worth</StyledLink>
          <StyledLink to="/real-estate-assessment">
            Book A Seller's Consultation
          </StyledLink>
        </Dropdown>
      </DLink>

      <DLink>
        Buying
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown>
          <StyledLink to="/buying-a-house-in-dc-alexandria/">
            Buying With Us
          </StyledLink>
          <StyledLink to="/new-construction-for-buyers/">
            Buying New Construction
          </StyledLink>
          <StyledLink to="/buying-a-home-consultation">
            Book a Buyer's Consultation
          </StyledLink>
        </Dropdown>
      </DLink>

      <DLink>
        Listing
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown>
          <StyledLink to="/our-featured-listings/d">
            Featured Listings
          </StyledLink>
          <StyledLink to="/custom-search/">Start Your Search</StyledLink>
          <StyledLink to="/our-featured-listings/our-open-houses/-sellers">
            Open Houses
          </StyledLink>
          <StyledLink to="/our-featured-listings/coming-soon-listings/">
            Coming Soon
          </StyledLink>
          <StyledLink to="/our-featured-listings/walkable-lifestyle-listings/">
            Condos & Townhouses
          </StyledLink>
          <StyledLink to="/our-featured-listings/new-construction-listings/">
            New Construction
          </StyledLink>
          <StyledLink to="/our-featured-listings/our-sold-listings/">
            Sold Listings
          </StyledLink>
        </Dropdown>
      </DLink>

      <DLink>
        Our
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown>
          <StyledLink to="/meet-our-real-estate-team/">
            Meet Our Team
          </StyledLink>
          <StyledLink to="/meet-our-real-estate-team/">
            Our Awards & Press
          </StyledLink>
          <StyledLink to="/client-success-stories/">Success Stories</StyledLink>
          <StyledLink to="/our-commitment-to-our-clients/">
            Our Commitment To Our Clients
          </StyledLink>
          <StyledLink to="/charities-we-support">
            Charities We Support
          </StyledLink>
          <StyledLink to="/our-blog/stay-up-to-date/">
            Want to Stay Up to Date?
          </StyledLink>
          <StyledLink to="/meet-our-real-estate-team/join-our-team/">
            Looking For A Career In Real Estate?
          </StyledLink>
        </Dropdown>
      </DLink>

      <DLink>
        Neighborhoods
        <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
        <Dropdown>
          <StyledLink to="/explore-our-neighborhoods/">
            Explore Our Area
          </StyledLink>
          <StyledLink to="/our-commitment-to-the-washington-dc-area/">
            Our Commitment to the Area
          </StyledLink>
        </Dropdown>
      </DLink>

      <li>Blog</li>
    </Nav>
  );
};
export default MainNav;
