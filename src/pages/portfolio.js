import React from "react";
import styled from "styled-components";

import SkillScale from "../components/SkillScale";

const GridFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ColumnFlex = styled.div`
  width: 45%;
`;

const Portfolio = (props) => {
  const { data } = props;
  return (
    <div className="portfolio">
      <GridFlex>
        <ColumnFlex>
          <SkillScale type="bar" skills={data.languages} />
        </ColumnFlex>
        <ColumnFlex>
          <SkillScale type="bubbles" skills={data.skillsMatrix} />
        </ColumnFlex>
      </GridFlex>
    </div>
  );
};

export default Portfolio;
