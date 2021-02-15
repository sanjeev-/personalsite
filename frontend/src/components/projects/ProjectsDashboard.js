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
      <Flex
        primary
        mx={5}
        my={4}
        justifyContent="center"
        minWidth={["400px", "500px"]}
        flexDirection="row"
      >
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
  );
};

export default ProjectsDashboard;
