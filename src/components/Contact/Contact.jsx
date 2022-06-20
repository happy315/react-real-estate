import React from "react";
import styled from "styled-components";
import {IoMdHeartEmpty} from 'react-icons/io'
const StyledContact = styled.div`
  width: 100%;
  height: 40%;
  padding: 100px 0 60px 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled.div`
  h4 {
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
    opacity: 0.2;
  }
  h1 {
    font-size: 3rem;
  }
`;
const StyledForm = styled.form`
  margin-top: 2rem;
  ul {
    position: relative;
    width: 500px;
    display: flex;
    flex-direction: column;
  }
  li {
    width: 500px;
    margin: 0.2rem 0;
  }
  li .label_name {
    width: 100%;
    position: absolute;
    top: 20px;
    left: 15px;
    letter-spacing: 0.1rem;
    color: #39a795;
    font-weight: 500;
  }
  li .label_email {
    position: relative;
    top: 30px;
    left: 15px;
    letter-spacing: 0.1rem;
    color: #39a795;
    font-weight: 500;
  }
  li .label_textarea {
    position: relative;
    top: 30px;
    left: 15px;
    letter-spacing: 0.1rem;
    color: #39a795;
    font-weight: 500;
  }
  li input {
    width: 100%;
    padding: 1rem;

    border: 2px solid #39a795;
  }
  
  li input #name {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    padding: 1rem 0rem;
  }
  
  li input #email {
    position: absolute;
    top: 15px;
    left: 5px;
    width: 100%;
    padding: 0.5rem 0rem;
  }
  li textarea {
    width: 100%;
    border: 2px solid #39a795;
  }
  li div {
    width: 100%;
    text-align: center;
    display: inline-block;
  }
  li div button{
    position: relative;
    padding: 0.8rem 7rem;
    color:#39a795;
    background-color: var(--secondary-color);
    border: 0.15rem solid #39a795;
    margin-top: 1rem;
    transition: 1s all ;
  }

  li div button span{
    position: relative;
     top: 1rem;
    right: 1.2rem;
    visibility: hidden;
  }
  
  li div button:hover{
    background-color: #000;
    cursor: pointer;
    
  }
  li div button:hover span{
    visibility: visible;
    
}
`;


const Contact = () => {


    const submitHandler = (e) => {
        e.preventDefault();
    }






  return (
    <StyledContact>
      <StyledTitle>
        <h4>We're always here to listen.</h4>
        <h1>Have Questions? It Starts Here</h1>
      </StyledTitle>
      <StyledForm action="" id="form" onSubmit={submitHandler}>
        <div>
          <ul>
            <li>
              <label htmlFor="name" className="label_name">
                Your name <span>*</span>
              </label>
              <input
                type="text"
                id="name"
                aria-required="true"
                aria-invalid="false"
              />
            </li>
            <li>
              <label htmlFor="email" className="label_email">
                Your email <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                aria-required="true"
                aria-invalid="false"
              />
            </li>
            <li>
              <label htmlFor="textarea" className="label_textarea">
                How we can help you?
              </label>
              <textarea
                name="textarea"
                id="textarea"
                cols="50"
                rows="10"
                aria-invalid="false"
              ></textarea>
            </li>
                      <li>
                          <div>
                          <button type="submit">Send<span><IoMdHeartEmpty/></span></button>
                          </div>
              
            </li>
          </ul>
        </div>
      </StyledForm>
    </StyledContact>
  );
};
export default Contact;
