import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import SkillScale from "../components/SkillScale";
import CustomTitle from "../components/CustomTitle";
import EducationIcon from "../assets/icons/education-icon.svg";
import AchievementIcon from "../assets/icons/certification-icon.svg";
import LanguageIcon from "../assets/icons/language-icon.svg";
import WorkIcon from "../assets/icons/work-experience-icon.svg";
import ProjectsIcon from "../assets/icons/projects-icon.svg";
import SkillsIcon from "../assets/icons/skills-icon.svg";
import Timeline from "../components/Timeline";
import projectData from "../data/projects.json";

const GridFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    flex-wrap: nowrap;
  }
`;

const ColumnFlex = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 45%;
  }
`;

const Portfolio = (props) => {
  const { data } = props;

  if (data)
    return (
      <div className="portfolio">
        <GridFlex>
          <ColumnFlex>
            <CustomTitle title="Education" icon={EducationIcon} />
            <Timeline list={
              data.education.map(item => ({
              date: item.year,
              title: item.graduation,
              subTitle: item.studies,
              description: item.university,
              subDescription: `final grade: ${item.grade}`,
            }))} />
          </ColumnFlex>
          <ColumnFlex>
            <CustomTitle title="Achievements" icon={AchievementIcon} />
            <Timeline list={
              data.certification.map(item => ({
              date: item.year,
              title: item.title,
              subTitle: item.organization,
              description: `License number: ${item.licenseId}`,
            }))} />
          </ColumnFlex>
        </GridFlex>
        <GridFlex>
          <ColumnFlex>
            <CustomTitle title="Work" icon={WorkIcon} />
            <Timeline list={
              data.workExperience.map(item => ({
              date: `${item.startDate} - ${item.endDate}`,
              title: item.position,
              subTitle: item.company,
              description: item.address,
            }))} />
          </ColumnFlex>
          <ColumnFlex>
            <CustomTitle title="Selection of Projects" icon={ProjectsIcon} />
            <Timeline list={
              projectData.projects.map(item => {   
                if(item.projectSelection) return {
                  date: `${item.title} - ${item.customer}`,
                  title: item.role,
                  description: item.description,
                  subDescription: item.technologies,
                }
              })} />
          </ColumnFlex>
        </GridFlex>
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
  return <></>
};

export default Portfolio;
