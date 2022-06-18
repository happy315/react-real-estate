import React ,{ useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const FullNav = styled.div``;
const Nav = styled.ul`
  width:100vw;
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
  background-color: transparent;
  z-index: 99;
 
  > li {
    color: var(--secondary-color);
    font-size: 1rem;
    cursor: pointer;
  }
`;
const Dropdown = styled.ul`
  width: 170px;
  height: auto;
  margin: 1.5rem 0.2rem;
  padding: 0rem 1rem;
  display: none;
  flex-direction: column;
  z-index: 99;
  background-color: var(--primary-background-color);
`;

const StyledLink = styled(Link)`
  color: var(--secondary-color);
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem 0;
`;

const MainNav = () => {

  const navref = useRef();
  useEffect(() => {
    const li = document.querySelectorAll('ul >li');
    
  
  window.addEventListener('scroll',function () {
    if (window.scrollY > 0) {
      navref.current.style.backgroundColor = 'var(--secondary-color)';
      navref.current.style.borderBottom = '0.1rem solid black';
      navref.current.style.borderTop = '0.1rem solid black';
      navref.current.style.transition = '0.5s all';
      li.forEach((listItem) => {
        listItem.style.color = 'black'
      })
    } else if (window.scrollY === 0) {
      navref.current.style.backgroundColor = 'transparent';
      navref.current.style.borderTop = 'none';
      navref.current.style.borderBottom = '0.1rem solid white';
      navref.current.style.transition = '0.5s all';
      li.forEach((listItem) => {
        listItem.style.color = 'white'
      })
    }
    
  }) 
  
}, [])

   
  return (
    <FullNav>
      <Nav className="nav" ref={navref}>
        <li style={{ position: "relative", right: "2rem" }}>Logo</li>
        <li>
          Our guides
          <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          <Dropdown>
            <StyledLink to="/our-lifestyle-guide">
              Our Lifestyle Guide
            </StyledLink>
            <StyledLink to="/Our-buying-guide">Our Buying Guide</StyledLink>
            <StyledLink to="/for-sellers">For sellers</StyledLink>
            <StyledLink to="/for-downsizing">For Downsizing</StyledLink>
            <StyledLink to="/for-condos">For Condos</StyledLink>
            <StyledLink to="/all-guides">Get All Our Guides</StyledLink>
            <StyledLink to="/compass">
              The Collection Magazine by Compass
            </StyledLink>
          </Dropdown>
        </li>

        <li>
          Selling
          <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          <Dropdown>
            <StyledLink to="/selling-with-us">Selling With Us</StyledLink>
            <StyledLink to="/selling-new-homes">Selling New Homes</StyledLink>
            <StyledLink to="/your-homeworth">
              What Is Your Home Worth
            </StyledLink>
            <StyledLink to="/real-estate-assessment">
              Book A Seller's Consultation
            </StyledLink>
          </Dropdown>
        </li>

        <li>
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
        </li>

        <li>
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
        </li>

        <li>
          Our
          <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
          <Dropdown>
            <StyledLink to="/meet-our-real-estate-team/">
              Meet Our Team
            </StyledLink>
            <StyledLink to="/meet-our-real-estate-team/">
              Our Awards & Press
            </StyledLink>
            <StyledLink to="/client-success-stories/">
              Success Stories
            </StyledLink>
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
        </li>

        <li>
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
        </li>

        <li>Blog</li>
      </Nav>
    </FullNav>
  );
};
export default MainNav;
