import React, { useState } from "react";
import { Flex, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";

const Searchbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      width="100%"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={3}
        width="700px"
        minHeight="50px"
        borderRadius="20px"
        backgroundColor={isHovered ? colors.grey[2] : colors.grey[1]}
        transition="background-color 0.2s ease-in"
      ></Flex>
    </div>
  );
};

export default Searchbar;
