import React from "react";
import Styled from "styled-components";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";
import pic1 from "../assests/logo192.png";
const SHome = Styled.div`
  max-height: 94vh;
  min-height: 94vh;
  width:75%;
  header{
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      background: rgb(39, 41, 59);
      height: 90%;
      width: 90%;
      display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    }
  }
  section{
    height: 40vh;
  }
  .highlights{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2%;
  }
  a {
    text-decoration: none;
    color: whitesmoke;
    transition: 0.3s ease-in-out;
    border-bottom: 1px solid rgba(0,0,0,0);
    &:visited {
      color: whitesmoke;
    }
  }
  .see-more{
    /* border: 1px solid red; */
    width: 10%;
    margin: 0 auto;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease-in-out;
    &:hover{
      background: rgb(39, 41, 59);
      cursor: pointer;
      border-radius: 10px;
    }
  }
`;

const Home = () => {
  const highlights = [
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
  ];
  return (
    <SHome>
      <header>
        <div>
          <h1>Hi! Welcome to my portfolio</h1>
        </div>
      </header>
      <section>
        <h1>Highlights</h1>
        <div className="highlights">
          {highlights.map((high) => (
            <HomeCard
              pic={high.pic}
              name={high.name}
              website={high.website}
              github={high.github}
            />
          ))}
        </div>
        <div className="see-more">
          <Link to="/projects">See more</Link>
        </div>
      </section>
    </SHome>
  );
};

export default Home;
