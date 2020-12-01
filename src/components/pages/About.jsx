import React from "react";
import Styled from "styled-components";
import NavBar2 from "../NavBar2";

const SAbout = Styled.section`
  padding-left: 20%
  h1{
    text-align: left;
  }
`;

const About = (props) => {
  return (
    <SAbout>
      <NavBar2 />
      <div>
        <h1>About</h1>
        <div>
          <p>
            Hello my name is Zavier Guadalupe I am a versatile Full-Stack
            Developer
            <br />
            passionate about programming, product development and optimizing
            <br />
            productivity. In leveraging my unique experience and problem solving
            <br />
            skills, I hope to contribute to a company and employee success.
            <br />
          </p>
        </div>
      </div>
    </SAbout>
  );
};

export default About;
