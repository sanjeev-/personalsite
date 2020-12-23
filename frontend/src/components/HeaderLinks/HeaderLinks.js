import React from "react";
import { colors } from "../../designSystem/theme";
import { Flex, Text, Link } from "../../designSystem";
import "./index.css";
import {
  ROUTE_PROJECTS_BASE,
  ROUTE_ABOUT_BASE,
  ROUTE_SNIPPETS_BASE,
} from "../../constants/route_constants";

const HeaderLinks = () => {
  return (
    <Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_PROJECTS_BASE}
          color={colors.grey[2]}
          textDecoration="none"
        >
          Projects
        </Link>
      </Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_SNIPPETS_BASE}
          color={colors.grey[2]}
          textDecoration="none"
        >
          Snippets
        </Link>
      </Flex>
      <Flex px={4}>
        <Link
          className="header-links"
          href={ROUTE_ABOUT_BASE}
          color={colors.grey[2]}
          textDecoration="none"
        >
          About
        </Link>
      </Flex>
    </Flex>
  );
};

export default HeaderLinks;
