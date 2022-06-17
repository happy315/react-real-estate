import React from 'react';
import MainNav from './MainNav';
import SmallNav from './SmallNav';
import styled from 'styled-components';

const HeaderStyles  = styled.div`
    z-index:99;
    
`

const Header = () => {
    
    
    return (
        <HeaderStyles>
            <SmallNav />
            <MainNav />
        </HeaderStyles>
    );
};
export default Header;