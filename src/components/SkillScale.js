import React from "react";
import styled from "styled-components";

const StyledProgressBar = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #417505;
`;

const StyledBubble = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 25px;
  margin-right: 0.25rem;
  border: 2px solid #417505;
  background-color: ${(props) => (props.filled ? "#417505" : "white")};
`;

const StyledFiller = styled.div`
  background-color: #79a546;
  height: 10px;
  width: calc(20% * ${(props) => props.level});
`;

const StyledTitle = styled.h5`
  display: inline-block;
  margin: 0.5rem 2rem 0.5rem 0;
  min-width: 150px;
  vertical-align: super;
`;

const SkillScale = (props) => {
  const { type, skills } = props;

  const renderScaleBar = (level) => {
    return (
      <StyledProgressBar>
        <StyledFiller level={level} />
      </StyledProgressBar>
    );
  };

  const renderScaleBubbles = (level) => {
    let bubbles = [];

    for (let i = 0; i < 5; i++) {
      bubbles.push(<StyledBubble key={i} filled={level > i ? true : false} />);
    }

    return bubbles;
  };

  return (
    <div className={`skill-${type}`}>
      {skills.map((item, index) => {
        const { language, skill, level } = item;

        return (
          <React.Fragment key={index}>
            <StyledTitle>{skill || language}</StyledTitle>
            {type === "bar" ? renderScaleBar(level) : renderScaleBubbles(level)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default SkillScale;
