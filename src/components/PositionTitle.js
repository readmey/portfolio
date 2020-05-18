import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "DINCondensed";
  font-weight: bold;
  font-size: 50px;
  max-width: 200px;
  position: relative;
  transform: translateY(-65%) translateX(-23%);
  background-color: white;
  padding: 1rem;
`;

const PositionTitle = (props) => {
  const { title } = props;

  return <StyledTitle>{title}</StyledTitle>;
};

export default PositionTitle;
