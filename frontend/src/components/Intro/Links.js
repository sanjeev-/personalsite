import React from "react";
import Link from "../styledBaseComponents/Link";
import Flex from "../../styles/styles.js";

const Links = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Flex p={2}>
          <Link>Projects</Link>
        </Flex>
        <Flex p={2}>
          <Link>·</Link>
        </Flex>
        <Flex p={2}>
          <Link>About Me</Link>
        </Flex>
      </Flex>
      <Flex borderBottom="2px solid" borderColor="#08D9D6" />
    </Flex>
  );
};

export default Links;
