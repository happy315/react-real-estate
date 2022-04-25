import React from 'react';
import { RiFacebookLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import styled from "styled-components";

const Nav = styled.div`
  display:flex; 
  justify-content:space-around;
  align-items:center;
  background-color:var(--primary-background-color);
  margin:0 2rem;
`

const SmallNav = () => {
    return (
        <Nav>
            <div className="social-media">
                <a href="#facebook"><RiFacebookLine /></a>
                <a href="#facebook"><FiTwitter /></a>
                <a href="#facebook"><ImPinterest2 /></a>
                <a href="#facebook"><FaInstagram /></a>
                <a href="#facebook"><RiLinkedinLine /></a>
            </div>
            <div className="contact-info">
                <a href="#phone"> <AiOutlinePhone />:46738934579834</a>
                <span className='verticale-lign'></span>
                <a href="#email"> <AiOutlineMail />:singhjodadj@gmail.com</a>
                <span className='verticale-lign'></span>
                <a href="#email-2"><AiOutlineMail />:sbdgsvbsdwvddga@gmail.com</a>
            </div>
            <div className="right-logo">
               <h2>logo</h2>
            </div>
        </Nav>
    )
};
export default SmallNav;