import React from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";
import Snippets from "./Snippets";

const SnippetsConnector = () => {
  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[0]}
    >
      <Flex px={5} py={4}>
        <Header />
      </Flex>
      <Flex alignItems="center" flexDirection="column">
        <Snippets />
      </Flex>
    </Flex>
  );
};

export default SnippetsConnector;
