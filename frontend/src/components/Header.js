import React from "react";
import { colors } from "../designSystem/theme";
import { Flex, Text, Link } from "../designSystem";
import {
  ROUTE_PROJECTS_BASE,
  ROUTE_ABOUT_BASE,
  ROUTE_SNIPPETS_BASE,
} from "../constants/route_constants";
import { Logo } from "./Logo";
import { HeaderLinks } from "./HeaderLinks";

const Header = ({ projectsActive, snippetsActive, aboutActive }) => {
  return (
    <Flex
      width="100%"
      backgroundColor={colors.grey[0]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Logo />
      <Flex pl={5}>
        <HeaderLinks
          projectsActive={projectsActive}
          snippetsActive={snippetsActive}
          aboutActive={aboutActive}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
