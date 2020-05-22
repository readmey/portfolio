import React from "react";
import styled from "styled-components";

import SkillScale from "../components/SkillScale";
import CustomTitle from "../components/CustomTitle";

import LanguageIcon from "../assets/icons/language-icon.svg";
import SkillsIcon from "../assets/icons/skills-icon.svg";

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
          <CustomTitle title="Languages" icon={LanguageIcon} />
          <SkillScale type="bar" skills={data.languages} />
        </ColumnFlex>
        <ColumnFlex>
          <CustomTitle title="Skills" icon={SkillsIcon} />
          <SkillScale type="bubbles" skills={data.skillsMatrix} />
        </ColumnFlex>
      </GridFlex>
    </div>
  );
};

export default Portfolio;
