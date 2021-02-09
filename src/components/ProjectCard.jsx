import React, { useEffect, useRef } from "react";
import Styled from "styled-components";
import { gsap } from "gsap";

const SProjectCard = Styled.div`
  width: 60vw;
  border-radius: 10px;
  background: rgb(39, 41, 59);
  padding 2%;
  margin: 2%;
  display: flex;
  transition: 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: whitesmoke;
    transition: 0.3s ease-in-out;
    border-bottom: 1px solid rgba(0,0,0,0);
    &:visited {
      color: whitesmoke;
    }
    &:hover{
      border-bottom: 1px solid whitesmoke;
    }
  }
  &:hover{
    background: rgb(48, 51, 73);
    cursor: pointer;
  }
  div{
    margin: 2%;
  }
  .content-container{
    width: 60%;
  }
  .name{

    text-align: left;
  }
  .pic{
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .desc{
    text-align: left;
  }

  .bottom{
    display: flex;
    justify-content: space-around;
  }

  .link{

  }
  .github{

  }
`;

const ProjectCard = (props) => {
  const { name, desc, website, github, pic } = props;
  return (
    <SProjectCard>
      <div className="content-container">
        <div className="name">
          <h2>{name}</h2>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
        <div className="bottom">
          <div className="link">
            <a href={website}>website</a>
          </div>
          <div className="github">
            {" "}
            <a href={github}>github</a>
          </div>
        </div>
      </div>
      <div className="pic">
        <img src={pic} alt="" />
      </div>
    </SProjectCard>
  );
};

export default ProjectCard;
