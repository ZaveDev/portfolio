import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "./utils";

const Navbar = (props) => {
  const history = useHistory();

  const changePage = (route) => {
    history.push(`/${route}`);
  };

  return (
    <nav>
      <Button title={"Home"} onClick={() => changePage("")} />
      <Button title={"About"} onClick={() => changePage("About")} />
      <Button title={"Projects"} onClick={() => changePage("Projects")} />
      <Button title={"Contact"} onClick={() => changePage("Contact")} />
    </nav>
  );
};

export default Navbar;
