import React from "react";
import Styled from "styled-components";
import SkillBubble from "./SkillBubble";

const SAbout = Styled.div`
  height: 94vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  section{
    text-align: left;
    padding: 2%;
    background: rgb(39, 41, 59);
    border-radius: 10px;
    width: 70%;
    height: 70%;
    header{
      height: 10%;
    }
    div{
      height: 80%;
    }
    .skills-container{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
    footer{
      height: 10%;
      text-align: center;
      button{
        width: 50%;
        background: none;
        border-radius: 6px;
        height: 50%;  
        color: whitesmoke;
        border: 1px solid rgba(255,255,255, 0.05); 
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover{
          background: rgba(255,255,255, 0.05);
          border: 1px solid whitesmoke; 
        }
        span{
          
        }

      }
    }
  }
`;

const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "Express",
    "Ruby",
    "Rails",
    "Node",
    "Knex",
    "BASH",
    "Redux",
    "Github",
    "TypeScript",
    "Object Oriented Programing",
    "HTML",
    "CSS",
  ];
  skills.sort();
  return (
    <SAbout>
      <section>
        <header>
          <h1>ABOUT</h1>
        </header>

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
          distinctio animi accusantium maiores qui, assumenda quisquam
          recusandae quae similique rem deleniti expedita fuga voluptatem
          tenetur eum iure voluptate dolorem beatae?
          <h2>Skills</h2>
          <div className="skills-container">
            {skills.map((skill) => {
              console.log(skill);
              return <SkillBubble skill={skill} />;
            })}
          </div>
        </div>

        <footer>
          <button>
            <span>{`Resume`}</span>
          </button>
        </footer>
      </section>
    </SAbout>
  );
};

export default About;
