import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

const SNavBar = Styled.nav`
  
  display: flex;
  height: 5vh;
  align-items: center;
  width: 100%;
  .spacer{
    width: 70%;
    text-align: left;
    
    h1{
      padding-left: 10%;
      margin:0;
    }
  }
  .nav-btn{
    color: whitesmoke;
    display: flex;
    align-items: center;
    transition: 0.3s ease-in-out;
    height: 100%;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0);
    width: 10%;
    &:hover{
      border-bottom: 2px solid #00f7ff;
    }
    a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: whitesmoke;
    transition: 0.3s ease-in-out;
    height: 100%;
    width: 100%;
    &:hover{
      color: #00f7ff;
    }
  }
`;

const NavBar = () => {
  return (
    <SNavBar>
      <div className="spacer">
        <h1>Zavier Guadalupe</h1>
      </div>
      <div className="nav-btn">
        <Link to="/">Home</Link>
      </div>
      <div className="nav-btn">
        <Link to="/about">About</Link>
      </div>
      <div className="nav-btn">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="nav-btn">
        <Link to="/contact">Contact</Link>
      </div>
    </SNavBar>
  );
};

export default NavBar;
