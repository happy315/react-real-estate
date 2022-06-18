import React from 'react';
import styled from 'styled-components';
import { FaBuilding } from 'react-icons/fa';
import { FaTrashRestoreAlt } from 'react-icons/fa';
const StyledFooter = styled.div`
    position: absolute;
    width: 100%;
    height: 50vh;
    background-color:var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    color:var(--secondary-color)
`;
const StyledUpper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .links{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     }
     .links .first{
        margin: 0rem 2rem;
     }
`
const Footer = () => {
    return (
        <StyledFooter>
            <StyledUpper className="upper">
                <div className="logo">The GoodHeart Group</div>
                <div className="links">
                    <div className="first">
                        <h3>Sue Goodhart</h3>
                        <h3>Licensed Realtor VA, DC & MD</h3>
                        <h3>Email:sue@thegoodhartgroup.com</h3>
                        <h3>Phone: 703-362-3221</h3>
                    </div>
                    <div className="first">
                      <h3>Allison Goodhart DuShuttle</h3>
                      <h3>Licensed Realtor VA & DC</h3>
                      <h3>Email:allison@thegoodhartgroup.com</h3>
                      <h3>Phone:703-362-3221</h3>
                    </div>
                    <div className="first">
                    <h3>Compass</h3>
                    <h3>106 N. Lee Street</h3>
                    <h3>Alexandria, VA 22314</h3>
                    <h3>Phone: 703-266-7277</h3>
                    </div>
                    <div className="first">
                        <h2>COMPASS</h2>
                        <p>
                        <h2><FaBuilding /></h2>
                        <h2><FaTrashRestoreAlt /></h2>
                        </p>
                    </div>
                </div>
            </StyledUpper>
            <div className="below">
                <h3>© 2022 The Goodhart Group</h3>
                <a href="#contact">Contact Us</a>
                <a href="#privacy">Privacy Policy</a>
                <h3>Made by <span>Artifakt Digital</span></h3>
            </div>
        </StyledFooter>
    )
}
export default Footer;