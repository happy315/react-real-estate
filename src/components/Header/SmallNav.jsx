import React,{useEffect,useRef} from "react";
import styled from "styled-components";
import { RiFacebookLine } from "react-icons/ri";
import { FiTwitter } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneVolume } from "react-icons/fa";

const Nav = styled.div`
  width: 100vw;
  height: 1rem;
  position: fixed;
  top:0;
  left:0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color:transparent;
  padding: 1rem 0;
  
  border-bottom: 0.1rem solid #fff;
`;
const Social = styled.div`
position: relative;
  a {
    position: relative;
    padding: 0 0.5rem;
    text-decoration: none;
    color: var(--secondary-color);
  }
`;
const Contact = styled.div`
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  padding: 0.5rem 3rem;
  a {
    padding: 0 0.5rem;
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
  a {
    border-right: 2px solid var(--secondary-color);
    
  }
  a:nth-child(3) {
    border-right: none;
  }
`;
const Logo = styled.div`
  font-size: 2rem;
  color: var(--secondary-color);
  font-weight: 500;
  letter-spacing: 0.3rem;
  text-transform: capitalize;
`;

const SmallNav = () => {

  const snavRef = useRef();
  const logoRef = useRef();
  const li = document.querySelectorAll('a');
  useEffect(() => {
    window.addEventListener('scroll', function scrollHandler() {
      if (window.scrollY > 5) {
        snavRef.current.style.backgroundColor = 'white';
        snavRef.current.style.borderBottom = '0.1rem solid black';
        li.forEach((listItem) => {
          listItem.style.color = 'black'
        });
        logoRef.current.style.color = 'black';
      }  else if(window.scrollY ===0) {
        snavRef.current.style.backgroundColor = 'transparent';
        snavRef.current.style.borderBottom = '0.1rem solid white';
        li.forEach((listItem) => {
          listItem.style.color = 'white';
        });
        logoRef.style.color = 'white';
      }
    
     
   })
    
  },[]);
  
  
  return (
    <Nav ref={snavRef}>
      <Social>
        <a href="#facebook">
          <RiFacebookLine />
        </a>
        <a href="#facebook">
          <FiTwitter />
        </a>
        <a href="#facebook">
          <ImPinterest2 />
        </a>
        <a href="#facebook">
          <FaInstagram />
        </a>
        <a href="#facebook">
          <RiLinkedinLine />
        </a>
      </Social>
      <Contact>
        <a href="#phone">
          <FaPhoneVolume style={{ color: "green",position:'relative',top:'3px', }} />
          :46738934579834
        </a>

        <a href="#email">
          <AiOutlineMail style={{ color: "green",position:'relative',top:'3px' }} />
          :singhjodadj@gmail.com
        </a>

        <a href="#email">
          <AiOutlineMail style={{ color: "green",position:'relative',top:'3px' }} />
          :sbdgsvbsdwvddga@gmail.com
        </a>
      </Contact>
      <Logo ref={logoRef}>COMPASS</Logo>
    </Nav>
  );
};
export default SmallNav;
