import React from "react";
import Styled from "styled-components";

const SHomeCard = Styled.article`
  width: 15%;
  padding: 2%;
  background: rgb(39, 41, 59);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  &:hover{
    background: rgb(48, 51, 73);
    cursor: pointer;
  }
  img{
    width:50%;
  }
  div{
    display: flex;
    justify-content: space-evenly;
  }
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
`;

const HomeCard = (props) => {
  const { name, website, github, pic } = props;
  return (
    <SHomeCard>
      <img src={pic} alt="" />
      <h1>{name}</h1>
      <div>
        <a href={website}>website</a>
        <a href={github}>github</a>
      </div>
    </SHomeCard>
  );
};

export default HomeCard;
