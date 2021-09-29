import React from "react";
import CustomTabs from "../components/CustomTabs";
import SectionContainer from "./SectionContainer";

import experienceIcon from '../assets/experience.svg';

const Experience = () => {
  return (
    <SectionContainer
      id="experience"
      title="Experience"
      icon={experienceIcon}
      maxWidth="sm"
      padding="120"
      reverse
    >
      <CustomTabs />
    </SectionContainer>
  );
};

export default Experience;
