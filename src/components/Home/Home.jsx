import React from 'react';
import styled from 'styled-components';


const HomeSection = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 90vh;
    background-image:url('/images/DSC1240-scaled.jpeg');
    background-size: cover;
    z-index: -1;
`
const Home = () => {
    
    return (
        <HomeSection>
            <img src="" alt="" srcset="" />
            <div className="heading">
            <h2>We Do Everything With Our Heart</h2>
            </div>
            <div className="paragraph">
            <p>Whether buying or selling, our established team of agents with presence provide
            guidance, support, and confidence — keeping your best interests at heart.</p>
            </div>
            <div className="buttons">
                <button className="search">Search For Homes</button>
                <button className="evaluation">Get A Home Evaluation </button>
            </div>
            <button>
            <a href="#contact" className="scroll-link">button</a>
            </button>
            
        </HomeSection>
    )
}
export default Home;