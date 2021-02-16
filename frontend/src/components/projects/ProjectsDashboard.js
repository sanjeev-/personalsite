import React from "react";
import { Flex } from "coppola";
import Header from "../Header.js";
import ProjectCard from "./ProjectCard";
import projectContent from "./content";

const ProjectsDashboard = () => {
  return (
    <Flex primary minWidth="100vw" minHeight="100vh" flexDirection="column">
      <Flex px={5} py={4}>
        <Header projectsActive />
      </Flex>
      <Flex width="100%" justifyContent="center">
        <Flex primary my={4} width="950px" flexDirection="row" flexWrap="wrap">
          {projectContent.map((object, i) => (
            <ProjectCard
              key={i}
              title={object.title}
              subtitle={object.subtitle}
              coverPhotoUrl={object.coverPhotoUrl}
              onClickRoute={object.onClickRoute}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsDashboard;
