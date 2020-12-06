import React from "react";
import { colors } from "../designSystem/theme";
import { Flex, Text, Link } from "../designSystem";
import { ROUTE_PROJECTS_BASE } from "../constants/route_constants";

const links = Object.freeze([
  {
    name: "Projects",
    link: ROUTE_PROJECTS_BASE,
  },
  {
    name: "Snippets",
    link: ROUTE_PROJECTS_BASE,
  },
  {
    name: "About",
    link: ROUTE_PROJECTS_BASE,
  },
]);

const Header = () => {
  return (
    <Flex
      width="100%"
      backgroundColor={colors.grey[2]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex px={4}>
        <Text color={colors.purple[1]}>SSS</Text>
      </Flex>
      <Flex px={4}>
        {links.map((object, i) => (
          <Flex px={2} color={colors.purple[1]}>
            <Link href={object.link}>{object.name}</Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
