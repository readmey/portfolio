import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const StyledProgressBar = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid ${theme.colors.primary};
`;

const StyledBubble = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 25px;
  margin-right: 0.25rem;
  border: 2px solid ${theme.colors.primary};
  background-color: ${(props) => (props.filled ? theme.colors.primary : "white")};
  @media (max-width: ${theme.breakpoints.xs}) {
    float: none;
  }
`;

const StyledFiller = styled.div`
  background-color: ${theme.colors.secondary};
  height: 10px;
  width: calc(20% * ${(props) => props.level});
`;

const StyledFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSkills = styled.div`
  width: 100%;
  text-align: right;
`;

const StyledTitle = styled.h4`
  display: inline-block;
  margin: 0.5rem 0.5rem 0.5rem 0;
  min-width: 150px;
  vertical-align: super;
  font-weight: 400;
  @media (max-width: ${theme.breakpoints.xs}) {
    width: 100%;
  }
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
          <StyledFlexWrapper className={`skill-${skill || language}`} key={index}>
            <StyledTitle>{skill || language}</StyledTitle>
            <StyledSkills className={`skill-${skill || language}-${type}`}>
            {type === "bar" ? renderScaleBar(level) : renderScaleBubbles(level)}
            </StyledSkills>
          </StyledFlexWrapper>
        );
      })}
    </div>
  );
};

export default SkillScale;
