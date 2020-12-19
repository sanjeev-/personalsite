import React from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const ProjectsDashboard = () => {
  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[0]}
    >
      <Header />
    </Flex>
  );
};

export default ProjectsDashboard;
