import React from "react";
import { Flex, Text } from "coppola";
import Header from "../Header.js";
import GithubLink from "../snippets/GithubLink";
import Letterboxd from "./Letterboxd";

const About = () => {
  return (
    <Flex minWidth="100vw" minHeight="100vh" flexDirection="column" primary>
      <Flex px={5} py={4}>
        <Header aboutActive />
      </Flex>

      <Flex flexDirection="row" width="100%" justifyContent="center" pt={6}>
        <Flex justifyContent="center" width="1000px">
          <Flex flexDirection="column" pr={6}>
            <img
              src="https://sanjeev-personal-site.s3.amazonaws.com/about/eating_sandwich.png"
              height="500px"
              width="375px"
            />
          </Flex>
          <Flex
            flexDirection="column"
            width="375px"
            height="500px"
            justifyContent="space-between"
          >
            <Flex flexDirection="column">
              <Text fontSize={3} lineHeight="1.3em" primary>
                Hi, my name is Sanjeev and I'm a developer & data scientist
                living in NYC. I'm interested in building data products that are
                pretty and useful and don't ruin the world.
              </Text>
              <Text primary pt={2} lineHeight="1.3em">
                In my free time, I like to watch movies and hang out with my
                dog.
              </Text>
            </Flex>
            <Flex alignItems="flex-end" justifyContent="flex-end">
              <GithubLink isProfile />
              <Letterboxd />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
