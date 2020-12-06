import React from "react";
import { colors } from "../designSystem/theme";
import { Flex, Text } from "../designSystem";
const Header = () => {
  return (
    <Flex
      width="100%"
      backgroundColor={colors.grey[2]}
      justifyContent="space-between"
    >
      <Flex>
        <Text>SSS</Text>
      </Flex>
      <Flex>
        <Text>Projects</Text>
        <Text>Snippets</Text>
        <Text>About</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
