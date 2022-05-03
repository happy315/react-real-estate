import React from 'react';
import MainNav from './MainNav';
import SmallNav from './SmallNav';

const Header = () => {
    return (
        <div>
            <SmallNav />
            <MainNav />
        </div>
    );
};
export default Header;