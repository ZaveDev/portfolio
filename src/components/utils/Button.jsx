import React from "react";
import Styled from "styled-components";

const SButton = Styled.button`
  background-color: transparent;
  border: 1px #282c34 solid;
  border-radius: 5px;
  color: whitesmoke;
  cursor: pointer;
  font-size: 14px;
  outline: none;
  text-decoration: none;
  padding: 0.5% 1%;
  transition: ease-in-out 0.2s;

  &:hover {
    border-bottom: 1px #00e1ff solid;
    color: #00e1ff;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.24), 0 8px 8px 0 rgba(0,0,0,0.19);
  }
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
