import React from "react";
import Styled from "styled-components";

const SButton = Styled.button`
  background-color: transparent;
  border: 1px white solid;
  border-radius: 5px;
  color: whitesmoke;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`;

const Button = (props) => {
  const { title, onClick } = props;
  return (
    <>
      <SButton onClick={onClick}>{title}</SButton>
    </>
  );
};

export default Button;
