import React from "react";
import Flex from "../styles/styles.js";
import Text from "./styledBaseComponents/Text";
import { colors } from "../designSystem/theme";

const Header = () => {
  return (
    <Flex
      width="100%"
      backgroundColor={colors.grey[2]}
      justifyContent="space-between"
    >
      <Text>SSS</Text>
      <Text>Projects</Text>
      <Text>Snippets</Text>
      <Text>About</Text>
    </Flex>
  );
};

export default Header;
