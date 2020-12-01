import React from "react";
import styled from "styled-components";
import Navbar from "../NavBar";

const SHome = styled.div`
  padding-top: 22%;
`;

const Home = (props) => {
  return (
    <SHome>
      <h1>hello</h1>
      <Navbar />
    </SHome>
  );
};

export default Home;
