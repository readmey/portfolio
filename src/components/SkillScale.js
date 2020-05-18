import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #417505;
`;

const StyledBubble = styled.div`
  position: relative;
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 25px;
  margin-right: 0.25rem;
  border: 2px solid #417505;
  background-color: ${(props) => (props.filled ? "#79a546" : "white")};
`;

const StyledFiller = styled.div`
  background-color: #79a546;
  height: 10px;
  width: calc(20% * ${(props) => props.level});
`;

const StyledLabel = styled.h5`
  display: inline-block;
  margin: 0.5rem 2rem 0.5rem 0;
  min-width: 150px;
  vertical-align: super;
`;

const SkillScale = (props) => {
  const { type, skills } = props;

  const renderScaleType = (type) =>
    type === "bar" ? renderScaleBar : renderScaleBubbles;

  const renderScaleBar = skills.map((item) => {
    const { language, level } = item;
    return (
      <div className={`skill-${type}`}>
        <h5>{language}</h5>
        <StyledProgressBar>
          <StyledFiller level={level} />
        </StyledProgressBar>
      </div>
    );
  });

  const renderScaleBubbles = skills.map((item) => {
    const { skill, level } = item;
    let bubbles = [];

    for (let i = 0; i < 5; i++) {
      bubbles.push(<StyledBubble filled={level > i ? true : false} />);
    }

    return (
      <div className={`skill-${type}`}>
        <StyledLabel>{skill}</StyledLabel>
        {bubbles}
      </div>
    );
  });

  return <div>{renderScaleType(type)}</div>;
};

export default SkillScale;
