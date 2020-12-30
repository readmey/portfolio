import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  font-family: "DINCondensed";
  font-weight: bold;
  font-size: 40px;
  background-color: white;
  text-transform: uppercase;
  padding: 0;
  margin: 0;
  position: ${(props) => (props.icon ? "relative" : "absolute")};
  top: 0;
  left: 0.5rem;
  display: inline-block;
  vertical-align: bottom;
`;

const StyledWrapper = styled.div`
  margin-bottom: 1rem;
`;

const StyledIcon = styled.img`
  height: 40px;
  width: 40px;
  display: inline-block;
  margin-right: 0.25rem;
  vertical-align: sub;
`;

const CustomTitle = (props) => {
  const { title, icon } = props;
  const renderIcon = () => {
    return <StyledIcon src={icon} alt={`${title} icon`} />;
  };

  return (
    <StyledWrapper>
      {icon ? renderIcon() : null}
      <StyledTitle icon={icon}>{title}</StyledTitle>
    </StyledWrapper>
  );
};

export default CustomTitle;
