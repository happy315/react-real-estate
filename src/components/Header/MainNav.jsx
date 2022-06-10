import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FullNav = styled.div`
    
   
`
const Nav = styled.ul`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    padding:1.5rem 10rem;
    border-bottom:2px solid black;
    
   li{
       color:#000;
       font-size:1.2rem;
       cursor: pointer;
   }
`
const Dropdown = styled.ul`
      display: none;
      flex-direction:column;
      justify-content: center;
      
`;
const StyledLink = styled(Link)`
    color:#000;
    text-decoration:none;
    cursor: pointer;
`

 
const MainNav = () => {
    return (
        <FullNav>
            <Nav>
                <li>The GoodHeart Group</li>
            <li>
               our guides
                <Dropdown>
                 <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                 <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                 <StyledLink to='/for-sellers'>For sellers</StyledLink>
                 <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                 <StyledLink to='/for-condos'>For Condos</StyledLink>
                    <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                </Dropdown>
            </li>
                <li>
                    Selling
                    <Dropdown>
                    <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                    <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                    <StyledLink to='/for-sellers'>For sellers</StyledLink>
                    <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                    <StyledLink to='/for-condos'>For Condos</StyledLink>
                       <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                   <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                   </Dropdown>   
                </li>
                <li>
                    Buying
                    <Dropdown>
                    <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                    <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                    <StyledLink to='/for-sellers'>For sellers</StyledLink>
                    <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                    <StyledLink to='/for-condos'>For Condos</StyledLink>
                       <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                   <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                   </Dropdown>
                </li>
                <li>
                    Listing
                    <Dropdown>
                    <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                    <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                    <StyledLink to='/for-sellers'>For sellers</StyledLink>
                    <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                    <StyledLink to='/for-condos'>For Condos</StyledLink>
                       <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                   <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                   </Dropdown>
                </li>
                <li>
                    Our Team
                    <Dropdown>
                    <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                    <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                    <StyledLink to='/for-sellers'>For sellers</StyledLink>
                    <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                    <StyledLink to='/for-condos'>For Condos</StyledLink>
                       <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                   <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                   </Dropdown>
                </li>
                <li>
                    Neighborhoods
                    <Dropdown>
                    <StyledLink to='/our-lifestyl-guide'>Our Lifestyle Guide</StyledLink>
                    <StyledLink to='/Our-buying-guide'>Our Buying Guide</StyledLink>
                    <StyledLink to='/for-sellers'>For sellers</StyledLink>
                    <StyledLink to='/for-downsizing'>For Downsizing</StyledLink>
                    <StyledLink to='/for-condos'>For Condos</StyledLink>
                       <StyledLink to='/all-guides'>Get All Our Guides</StyledLink>
                   <StyledLink to='/compass'>The Collection Magazine by Compass</StyledLink>
                   </Dropdown>
                </li>
                <li>
                    Blog
                </li>
                
</Nav>
        </FullNav>
    )
}
export default MainNav;