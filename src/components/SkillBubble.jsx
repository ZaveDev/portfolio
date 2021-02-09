import React from "react";
import Styled from "styled-components";

const SSkillBubble = Styled.article`
  background: #293035;
  margin: 2%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: rgba(255,255,255, 0.05);
  p{
    text-align: center;
  }

`;

const SkillBubble = (props) => {
  return (
    <SSkillBubble>
      <p>{props.skill}</p>
    </SSkillBubble>
  );
};

export default SkillBubble;
