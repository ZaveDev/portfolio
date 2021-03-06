import React from "react";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";

import { Button } from "./utils";

const SNavBar = Styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 1%;
  padding-bottom: 1%;
`;

const Navbar = (props) => {
  const history = useHistory();

  const changePage = (route) => {
    history.push(`/${route}`);
  };

  return (
    <SNavBar>
      <Button title={"Home"} onClick={() => changePage("")} />
      <Button title={"About"} onClick={() => changePage("About")} />
      <Button title={"Projects"} onClick={() => changePage("Projects")} />
      <Button title={"Contact"} onClick={() => changePage("Contact")} />
    </SNavBar>
  );
};

export default Navbar;
