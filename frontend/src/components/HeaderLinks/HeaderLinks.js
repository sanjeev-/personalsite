import React from "react";
import { Flex, Link } from "coppola";
import "./index.css";
import {
  ROUTE_PROJECTS_BASE,
  ROUTE_ABOUT_BASE,
  ROUTE_SNIPPETS_BASE,
} from "../../constants/route_constants";

const HeaderLinks = ({ projectsActive, snippetsActive, aboutActive }) => {
  return (
    <Flex>
      <Flex px={4}>
        <Link href={ROUTE_PROJECTS_BASE}>Projects</Link>
      </Flex>
      <Flex px={4}>
        <Link href={ROUTE_SNIPPETS_BASE}>Snippets</Link>
      </Flex>
      <Flex px={4}>
        <Link href={ROUTE_ABOUT_BASE}>About</Link>
      </Flex>
    </Flex>
  );
};

export default HeaderLinks;
