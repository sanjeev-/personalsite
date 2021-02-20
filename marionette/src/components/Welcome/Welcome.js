import React from "react";
import { Flex, Text } from "coppola";

const Welcome = ({}) => {
  return (
    <>
      <Flex ml={6} pt="50px" position="absolute" id="logo">
        <Text fontFamily="GiveYouGlory-Regular" fontSize={5}>
          marionette
        </Text>
        <Flex position="relative" top="40px" left="3px">
          <img
            width="27px"
            height="39px"
            src="https://marionetteapp-public-assets.s3.amazonaws.com/lp/marionette_man.png"
          />
        </Flex>
      </Flex>
      <Flex
        height="100vh"
        width="100vw"
        flexDirection="column"
        alignItems="center"
      >
        <Flex width="70%" height="100%" flexDirection="column" pt={6}>
          <Text fontSize={6} fontWeight={350} lineHeight="1.4em">
            Hey there, welcome to marrionette, a movie recommendation website.
          </Text>
          <Text fontSize={6} lineHeight="1.4em" fontWeight={350}>
            To get started, we need to ask you a few questions about movies you
            like.
          </Text>
          <Text fontSize={6} lineHeight="1.4em" fontWeight={350} accent>
            From scratch
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Welcome;
