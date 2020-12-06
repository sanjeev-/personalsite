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
      <Flex px={4}>
        <Text>SSS</Text>
      </Flex>
      <Flex px={4}>
        {["Projects", "Snippets", "About"].map((object, i) => (
          <Flex px={2}>
            <Text>{object}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
