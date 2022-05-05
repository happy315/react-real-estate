import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";

const FirstDropDownItems = [
  {
    id:'1',
    title: 'Our Lifestyle Guides',
    path: '/Our-LifeStle-Guides',
  },
  {
    id:'2',
    title: 'Our Buying Guides',
    path: '/Our-Buying-Guides',
  },
  {
    id:'3',
    title: 'For Sellers',
    path: '/For-Sellers',
  },
  {
    id:'4',
    title: 'For Downsizing',
    path: '/For-Downsizing',
  },
  {
    id:'5',
    title: 'For Condos',
    path: '/For-Condos',
  },
  {
    id:'6',
    title: 'Get All Our Guides',
    path: '/Get-All-Our-Guides',
  },
  {
    id:'7',
    title: 'The Collection Magazine by Compass',
    path: '/The-Collection-Magazine-By-Compass',
  },
]
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
    position: relative;
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
  .active{
    visibility: visible;
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

// write styling for second dropdown

const SecondDropDown = styled.ul`
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
  li .slink {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
  }
  
`;

const MainNav = () => {
  const [dropdown, setDropdown] = useState(false);

  const firstDropDownHandler = () => {
    setDropdown(!dropdown)
  };
  const [secondDropDown,setSecondDropDown] = useState(false) 
  const secondDropDownHandler = () => {
   
    setSecondDropDown(!secondDropDown)
  };

  

  
  return (
    <Nav>
      <Logo>THE GOODHART GROUP</Logo>
      <Dropdowns>
        <ul>
          <li>
            <Link className="link" onClick={firstDropDownHandler}>
              Our Guides
              <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
            </Link>

            {dropdown &&
              <FirstDropDown>
                
                {FirstDropDownItems.map((element) => {
                  return (
                    <li>
                      <Link
                        className="Flink"
                        to={element.path}
                        
                      >
                        {element.title}
                      </Link>
                    </li>
                  )
                })
                }
              </FirstDropDown>
            }
          </li>
          <li>
            <Link className="link" onClick={secondDropDownHandler} >
              Selling
              <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
            </Link>
            {secondDropDown &&
              <SecondDropDown>
                <li>
                  <Link className="slink" to="/Selling-with-us" >
                    Selling with us
                  </Link>
                </li>
                <li>
                  <Link className="slink" to="/Selling-New-Homes" >
                    Selling New Homes
                  </Link>
                </li>
                <li>
                  <Link className="slink" to="/What-Is-Your-Home-Worth?" >
                    What Is Your Home Worth?
                  </Link>
                </li>
                <li>
                  <Link className="slink" to="/Book-A-Seller's-Consultation" >
                    Book a Seller's Consultation
                  </Link>
                </li>
              </SecondDropDown>
            }
          </li>
          <li>
            <Link className="link" to="/">
              Buying  <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Listing <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
            </Link>
          </li>
          <li>
            <Link className="link" to="/">
              Our Team <IoMdArrowDropdown style={{ position: "relative", top: "3px" }} />
            </Link>
          </li>
        </ul>
      </Dropdowns>
      <Blog>
        <Link className="link" to="/Blog">
          Blog
        </Link>
      </Blog>
    </Nav>
  );
};
export default MainNav;
