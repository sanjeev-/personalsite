import React from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const Snippets = () => {
  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[0]}
    >
      <Header />
      <Flex flexDirection="row" justifyContent="space-around">
        <Flex flexDirection="column">
          <Text color={colors.grey[3]}>Snip</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text color={colors.grey[3]}>Blap</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Snippets;
