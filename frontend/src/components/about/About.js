import React from "react";
import { Flex, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const About = () => {
  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[0]}
    >
      <Flex px={5} py={4}>
        <Header aboutActive />
      </Flex>

      <Flex flexDirection="row" justifyContent="space-around">
        <Flex flexDirection="column">
          <Text color={colors.grey[3]}>Pic of me</Text>
        </Flex>
        <Flex flexDirection="column" maxWidth="500px">
          <Text color={colors.grey[2]} lineHeight="1.2em" fontSize="1em">
            Hi,
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
