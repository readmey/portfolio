import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const GridFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-wrap: nowrap;
  }
`;

const StyledWrapper = styled.div`
  margin-left: 1rem;
  max-width: calc(100% - 80px);
  @media (max-width: ${theme.breakpoints.xs}) {
    max-width: calc(100% - 40px);
  }
`;

const StyledBubble = styled.div`
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 25px;
  float: right;
  border: 2px solid ${theme.colors.primary};
  background-color: white;
`;

const StyledLine = styled.div`
  height: 100%;
  margin-top: 1rem;
  margin-left: 0.5rem;
  width: 2px;
  background-color: ${theme.colors.primary};
`;

const StyledTitle = styled.div`
  font-family: "DINCondensed";
  font-weight: 400;
  font-size: 18px;
  display: block;
`;

const StyledDescription = styled.div`
  font-family: "DIN";
`;

const Timeline = (props) => {
  const { list } = props;

  return (
    <>
      { list.map((item, index) => (
        <GridFlex key={index}>
          <div>
            <StyledBubble />
            {(list.length === 1 || index < list.length - 1)  && <StyledLine />}
          </div>
          <StyledWrapper>
            <StyledTitle>{item.date}</StyledTitle>
            <StyledTitle>{item.title}</StyledTitle>
            <StyledDescription>{item.subTitle}</StyledDescription>
            <StyledDescription>{item.description}</StyledDescription>
            <StyledDescription>{item.subDescription}</StyledDescription>
          </StyledWrapper>
        </GridFlex>
      ))}
    </>
  )
}

export default Timeline;