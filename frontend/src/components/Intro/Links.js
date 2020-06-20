import React from "react";
import Link from "../styledBaseComponents/Link";
import Flex from "../../styles/styles.js";
import { ROUTE_PROJECTS_BASE } from "../../constants/route_constants";

const Links = () => {
  return (
    <Flex flexDirection="column">
      <Flex>
        <Flex p={2}>
          <Link href={ROUTE_PROJECTS_BASE}>Projects</Link>
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
