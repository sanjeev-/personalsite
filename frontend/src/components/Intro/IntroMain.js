import React from "react";
import Greeting from "./Greeting";
import Links from "./Links";
import Flex from "../../styles/styles.js";

const Intro = () => {
  return (
    <React.Fragment>
      <Flex lineHeight={0} flexDirection="column">
        <Greeting />
        <Flex pt={5}>
          <Links />
        </Flex>
      </Flex>
    </React.Fragment>
  );
};

export default Intro;
