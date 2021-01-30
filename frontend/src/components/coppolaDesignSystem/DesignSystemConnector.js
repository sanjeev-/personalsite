import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const DesignSystemConnector = () => {
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
      <Flex alignItems="center" flexDirection="column"></Flex>
    </Flex>
  );
};

export default DesignSystemConnector;
