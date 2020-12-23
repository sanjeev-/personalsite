import React from "react";
import { colors } from "../../designSystem/theme";
import { Flex, Text, Link } from "../../designSystem";
import "./index.css";

const Logo = () => {
  return (
    <Flex>
      <span className="first-s">
        <Link
          color={colors.purple[0]}
          fontSize={6}
          fontWeight="bold"
          href="/"
          textDecoration="none"
          className="first-s-color"
        >
          S
        </Link>
      </span>
      <span className="second-s">
        <Link
          color={colors.purple[0]}
          fontSize={6}
          fontWeight="bold"
          href="/"
          textDecoration="none"
          className="second-s-color"
        >
          S
        </Link>
      </span>
      <span className="third-s">
        <Link
          color={colors.purple[0]}
          fontSize={6}
          fontWeight="bold"
          href="/"
          textDecoration="none"
          className="third-s-color"
        >
          S
        </Link>
      </span>
    </Flex>
  );
};

export default Logo;
