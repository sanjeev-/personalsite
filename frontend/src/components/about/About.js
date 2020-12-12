import React from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const About = () => {
  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[2]}
    >
      <Header />
      <Flex flexDirection="row" justifyContent="space-around">
        <Flex flexDirection="column">
          <Text color={colors.grey[0]}>Pic of me</Text>
        </Flex>
        <Flex flexDirection="column">
          <Text color={colors.grey[0]}>Hi im sanjeev</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
