import React, { useEffect, useRef } from "react";
import Styled from "styled-components";
import ProjectCard from "./ProjectCard";
import pic1 from "../assests/logo192.png";

const SProjects = Styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  .pcard
`;

const Projects = () => {
  const projects = [
    {
      name: "Project X",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident in quaerat nisi a, suscipit nulla distinctio perspiciatis facilis optio illum eos exercitationem laudantium itaque, cumque quis magnam neque eum?",
      website: "https://google.com",
      github: "github.com/zavedev",
      pic: pic1,
    },
    {
      name: "Project X",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident in quaerat nisi a, suscipit nulla distinctio perspiciatis facilis optio illum eos exercitationem laudantium itaque, cumque quis magnam neque eum?",
      website: "google.com",
      github: "github.com/zavedev",
      pic: pic1,
    },
    {
      name: "Project X",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident in quaerat nisi a, suscipit nulla distinctio perspiciatis facilis optio illum eos exercitationem laudantium itaque, cumque quis magnam neque eum?",
      website: "google.com",
      github: "github.com/zavedev",
      pic: pic1,
    },
    {
      name: "Project X",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident in quaerat nisi a, suscipit nulla distinctio perspiciatis facilis optio illum eos exercitationem laudantium itaque, cumque quis magnam neque eum?",
      website: "google.com",
      github: "github.com/zavedev",
      pic: pic1,
    },
    {
      name: "Project X5s",
      desc:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic provident in quaerat nisi a, suscipit nulla distinctio perspiciatis facilis optio illum eos exercitationem laudantium itaque, cumque quis magnam neque eum?",
      website: "google.com",
      github: "github.com/zavedev",
      pic: pic1,
    },
  ];
  return (
    <SProjects>
      {projects.map((proj) => (
        <ProjectCard
          name={proj.name}
          desc={proj.desc}
          website={proj.website}
          github={proj.github}
          pic={proj.pic}
        />
      ))}
    </SProjects>
  );
};

export default Projects;
