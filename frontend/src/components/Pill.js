import React from "react";
import { Flex, Text } from "coppola";

const Pill = ({ text, handle }) => {
  const { formattedText, backgroundColor } = handle(text);
  return (
    <Flex
      width={["100px"]}
      height="30px"
      backgroundColor={backgroundColor}
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
    >
      <Text color="black" fontSize={1}>
        {formattedText}
      </Text>
    </Flex>
  );
};

export default Pill;
