import React from "react";
import SectionContainer from "./SectionContainer";

import stackIcon from "../assets/stack.svg";
import Carousel from "../components/Carousel";

const TechStack = () => {

  return (
    <SectionContainer
      id="tech-stack"
      title={"Tech Stack"}
      icon={stackIcon}
      maxWidth="md"
    >
      <Carousel />
    </SectionContainer>
  );
};

export default TechStack;
