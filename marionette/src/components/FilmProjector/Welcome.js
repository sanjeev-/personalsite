import React from "react";
import "./index.scss";
import { Flex, Text } from "../../designSystem";

const Welcome = ({}) => {
  return (
    <>
      <Flex height="500px" width="1000px" flexDirection="column">
        <Flex>
          <Text fontSize={7} lineHeight="1.4em">
            Hey there, welcome to marrionette, a movie recommendation website.
          </Text>
        </Flex>
        <Flex pt={4}>
          <Text fontSize={7} lineHeight="1.4em">
            To get started, we need to ask you a few questions about movies you
            like.
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Welcome;
