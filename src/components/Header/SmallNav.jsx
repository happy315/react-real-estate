import React from 'react';
import styled from 'styled-components';
import { RiFacebookLine } from 'react-icons/ri';
import { FiTwitter } from 'react-icons/fi';
import { ImPinterest2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


const Nav = styled.div`
  display:flex; 
  justify-content:space-around;
  align-items:center;
  background-color:var(--primary-background-color);
  padding:0 2rem;
  border-bottom:2px solid #bcb5b5;
`
const Social = styled.div`
    a{
        padding: 0 0.5rem;
        text-decoration: none;
        color: var(--primary-color);

    }
`
const Contact = styled.div`
    border-left:2px solid var(--primary-border-color);
    border-right:2px solid var(--primary-border-color);
    padding: 0.7rem  3rem;
    a{
      padding:0 0.5rem;
      text-decoration: none;
      color:var(--primary-color);
      font-size: 1rem;
      letter-spacing: 0.05rem;
    }
    a {
        border-right: 2px solid var(--primary-color);
    }
    a:nth-child(3){
        border-right:none;
    }
    
`
const Logo = styled.div`
    font-size: 2rem;
    color: var(--primary-color);
    font-weight: 600;
    letter-spacing: 0.3rem;
    text-transform:capitalize;

`



const SmallNav = () => {
    return (
        <Nav>
            <Social>
                <a href="#facebook"><RiFacebookLine /></a>
                <a href="#facebook"><FiTwitter /></a>
                <a href="#facebook"><ImPinterest2 /></a>
                <a href="#facebook"><FaInstagram /></a>
                <a href="#facebook"><RiLinkedinLine /></a>
            </Social>
            <Contact>
                <a href="#phone"><AiOutlinePhone style={{ color: 'green' }}/>:46738934579834</a>
                
                <a href="#email"><AiOutlineMail style={{color:'green' }}/>:singhjodadj@gmail.com</a>
               
                <a href="#email"><AiOutlineMail style={{color:'green' }}/>:sbdgsvbsdwvddga@gmail.com</a>
            </Contact>
            <Logo>
               COMPASS
               </Logo>
        </Nav>
    )
};
export default SmallNav;