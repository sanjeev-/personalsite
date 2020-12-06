import React from "react";
import Text from "./styledBaseComponents/Text";
import { colors } from "../designSystem/theme";
import { Flex } from "../designSystem";
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
