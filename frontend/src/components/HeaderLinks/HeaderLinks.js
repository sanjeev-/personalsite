import React from "react";
import { colors } from "../../designSystem/theme";
import { Flex, Text, Link } from "../../designSystem";
import "./index.css";
import {
  ROUTE_PROJECTS_BASE,
  ROUTE_ABOUT_BASE,
  ROUTE_SNIPPETS_BASE,
  ROUTE_DESIGN_SYSTEM_BASE,
} from "../../constants/route_constants";

const HeaderLinks = ({ projectsActive, snippetsActive, aboutActive }) => {
  return (
    <Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_PROJECTS_BASE}
          color={projectsActive ? colors.grey[3] : colors.grey[2]}
          textDecoration="none"
        >
          Projects
        </Link>
      </Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_SNIPPETS_BASE}
          color={snippetsActive ? colors.grey[3] : colors.grey[2]}
          textDecoration="none"
        >
          Snippets
        </Link>
      </Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_DESIGN_SYSTEM_BASE}
          color={snippetsActive ? colors.grey[3] : colors.grey[2]}
          textDecoration="none"
        >
          Design system
        </Link>
      </Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_ABOUT_BASE}
          color={aboutActive ? colors.grey[3] : colors.grey[2]}
          textDecoration="none"
        >
          About
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeaderLinks;
