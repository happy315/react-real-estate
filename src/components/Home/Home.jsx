import React from "react";
import { AiOutlineArrowDown } from 'react-icons/ai'
import styled from "styled-components";

const HomeSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0%;
  right: 0;
  width: 100vw;
  height: 90vh;
  margin: auto 0;
  background-image: url("/images/DSC1240-scaled.jpeg");
  background-size: cover;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* .heading{
        
      }
      .heading h1{
        
      } */
`;
const HeadingStyles = styled.div`
  margin-top: 6rem;
  text-align: center;
  color: var(--secondary-color);
  h1 {
    font-size: 6.3rem;
    font-weight: 600;
    letter-spacing: 3px;
  }
`;
const ParagraphStyels = styled.div`
  margin-top: 1rem;
  p {
    font-size: 1.3rem;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
`;
const ButtonStyles = styled.div`
  margin-bottom: 2rem;
  display: inline-block;
  button {
    min-width: 225px;
    padding: 1rem 3rem;
    margin: 1rem;
    color: var(--secondary-color);
    background-color: transparent;
    outline: 0.2rem solid #fff;
    font-weight: normal;
    letter-spacing: 0;
    font-size: 1rem;
  }
`;
const ScrollBtnStyles = styled.div`
   text-align: center;
   margin-right: 4.5rem;
   font-size:2rem;
   
  a{
    position: absolute;
    bottom: -50px;
    width: 25px;
    height: 105px;
   padding: 1rem 0rem;
    background-color: #fff;
    box-shadow: 0px 0px 4px 4px rgb(0 0 0 / 10%);
    font-size: 0.1rem;
    font-weight:100;
    color: #000;
    border: 0;
    
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <TextSection>
        <HeadingStyles>
          <h1>
            We Do Everything <br /> With Heart
          </h1>
        </HeadingStyles>
        <ParagraphStyels>
          <p>
            Whether buying or selling, our established team of agents with
            presence provide <br /> guidance, support, and confidence — keeping
            your best interests at heart.
          </p>
        </ParagraphStyels>
        <ButtonStyles>
          <button className="search">Search For Homes</button>
          <button className="evaluation">Get A Home Evaluation </button>
        </ButtonStyles>
      </TextSection>
      <ScrollBtnStyles>
        <a href="#contact" className="scroll-link">
       <img src="/images/black-arrow.svg" alt="" />
        </a>
      </ScrollBtnStyles>
    </HomeSection>
  );
};
export default Home;
