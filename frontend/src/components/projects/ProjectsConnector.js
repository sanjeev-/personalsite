import React from "react";
import Flex from "../../styles/styles.js";
import Title from "../styledBaseComponents/Title";
import SubHead from "../styledBaseComponents/SubHead";
import Text from "../styledBaseComponents/Text";
import Header from "../Header.js";

const ProjectsConnector = () => {
  return (
    <Flex pl={5} minWidth="100vw" minHeight="100vh" flexDirection="column">
      <Flex
        pt={5}
        onClick={() => {
          console.log("clicked");
          window.location.pathname = "/";
        }}
      >
        <Header />
      </Flex>
      <Title>Projects</Title>
      <Flex borderBottom="2px solid" borderColor="#08D9D6" />
      <Flex flexDirection="row" minHeight="100px" alignItems="center">
        <SubHead
          onClick={() => {
            window.location.pathname = "/projects/zora";
          }}
        >
          Untitled Zora Project
        </SubHead>
        <Flex pl={3}>
          <Text>Zora's life, three seconds at a time</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectsConnector;
