import React from "react";
import styled from "styled-components";
import { FaBuilding } from "react-icons/fa";
import { FaTrashRestoreAlt } from "react-icons/fa";
const StyledFooter = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: var(--primary-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--secondary-color);
`;
const StyledUpper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  .links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .links .first {
    margin: 0rem 3rem;
  }
  .links #fourth {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .links #fourth h2{
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
  }
  .links #fourth .icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .links #fourth .icons h2 {
    margin: 0rem 1rem;
    font-size: 2.5rem;
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 700;
    margin: 0.4rem 0;
    color: #fff;
  }
  #email:hover {
    border-bottom: 0.1rem solid #39a795;
    cursor: pointer;
  }
  #phone:hover {
    border-bottom: 0.1rem solid #39a795;
    cursor: pointer;
  }
`;
const StyledLogo = styled.div`
  font-size: 2rem;
  margin-bottom: 3rem;
`;
const StyledBelow = styled.div`
  position: absolute;
  bottom: 0;
  width: 100vw;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  h3 {
    color: var(--primary-color);
    margin: 0 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  a {
    color: var(--primary-color);
    margin: 0 0.5rem;
    text-decoration: none;
    border-left: 0.1rem solid black;
    color: #39a795;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0rem 0.4rem;
  }
  a:hover {
    cursor: pointer;
    text-decoration: none;
    text-decoration-color: #39a795;
    text-decoration-thickness: 0.1rem;
    text-decoration-style: thick;
    border-bottom: 0.1rem solid #39a795;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledUpper className="upper">
        <StyledLogo className="logo">The GoodHeart Group</StyledLogo>
        <div className="links">
          <div className="first">
            <h3>Sue Goodhart</h3>
            <h3>Licensed Realtor VA, DC & MD</h3>
            <h3>
              Email:<span id="email">sue@thegoodhartgroup.com</span>{" "}
            </h3>
            <h3>
              Phone:<span id="phone">703-362-3221</span>
            </h3>
          </div>
          <div className="first">
            <h3>Allison Goodhart DuShuttle</h3>
            <h3>Licensed Realtor VA & DC</h3>
            <h3>
              Email:<span id="email">allison@thegoodhartgroup.com</span>
            </h3>
            <h3>
              Phone:<span id="phone">703-362-3221</span>
            </h3>
          </div>
          <div className="first">
            <h3>Compass</h3>
            <h3>106 N. Lee Street</h3>
            <h3>Alexandria, VA 22314</h3>
            <h3>
              Phone:<span id="phone">703-266-7277</span>
            </h3>
          </div>
          <div className="first" id="fourth">
            <h2>COMPASS</h2>
            <div className="icons">
              <h2>
                <FaBuilding />
              </h2>
              <h2>
                <FaTrashRestoreAlt />
              </h2>
            </div>
          </div>
        </div>
      </StyledUpper>
      <StyledBelow>
        <h3>© 2022 The Goodhart Group</h3>
        <a href="#contact">Contact Us</a>
        <a href="#privacy">Privacy Policy</a>
        <h3>
          Made by <span>Artifakt Digital</span>
        </h3>
      </StyledBelow>
    </StyledFooter>
  );
};
export default Footer;
