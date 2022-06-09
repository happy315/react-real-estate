import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

 
const MainNav = () => {
    return (
        <div>
            <ul>
            <li>
               <Link>our guides</Link>
                <ul>
                 <Link to='/our-lifestyl-guide'>Our Lifestyle Guide</Link>
                 <Link to='/Our-buying-guide'>Our Buying Guide</Link>
                 <Link to='/for-sellers'>For sellers</Link>
                 <Link to='/for-downsizing'>For Downsizing</Link>
                 <Link to='/for-condos'>For Condos</Link>
                    <Link to='/all-guides'>Get All Our Guides</Link>
                <Link to='/compass'>The Collection Magazine by Compass</Link>
                </ul>
            </li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
       <li></li>
                <li></li>
                
</ul>
        </div>
    )
}
export default MainNav;