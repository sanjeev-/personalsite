import React from "react";
import { colors } from "../designSystem/theme";
import { Flex, Text, Link } from "../designSystem";
import {
  ROUTE_PROJECTS_BASE,
  ROUTE_ABOUT_BASE,
  ROUTE_SNIPPETS_BASE,
} from "../constants/route_constants";

const links = Object.freeze([
  {
    name: "Projects",
    link: ROUTE_PROJECTS_BASE,
  },
  {
    name: "Snippets",
    link: ROUTE_SNIPPETS_BASE,
  },
  {
    name: "About",
    link: ROUTE_ABOUT_BASE,
  },
]);

const Header = () => {
  return (
    <Flex
      width="100%"
      backgroundColor={colors.grey[0]}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex px={5} py={3}>
        <Link color={colors.purple[0]} fontWeight="bold" href="/">
          SSS
        </Link>
      </Flex>
      <Flex px={4}>
        {links.map((object, i) => (
          <Flex px={4} key={i}>
            <Link
              href={object.link}
              color={colors.grey[2]}
              textDecoration="none"
            >
              {object.name}
            </Link>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Header;
