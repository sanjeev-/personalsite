import React from "react";
import { Flex } from "coppola";
import { Logo } from "./Logo";
import { HeaderLinks } from "./HeaderLinks";

const Header = ({ projectsActive, snippetsActive, aboutActive }) => {
  return (
    <Flex
      primary
      width="100%"
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
