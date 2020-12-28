import React from "react";
import { Flex, Text } from "../designSystem";

const Pill = ({ fontColor, backgroundColor, text }) => {
  return (
    <Flex
      width={["100px"]}
      height="35px"
      backgroundColor={backgroundColor}
      borderRadius="10px"
    >
      <Text color={fontColor} fontSize={1}>
        {text}
      </Text>
    </Flex>
  );
};

export default Pill;
