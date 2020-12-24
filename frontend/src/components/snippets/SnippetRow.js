import React from "react";
import { Flex, Title, SubHead, Text, Link } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const SnippetRow = ({ snippetName, category, language, description, link }) => {
  return (
    <Flex justifyContent="space-between" pt={2} px={3}>
      <Link
        color={colors.grey[3]}
        fontSize={2}
        href={link}
        textDecoration="none"
      >
        {snippetName}
      </Link>
      <Link
        color={colors.grey[3]}
        fontSize={2}
        href={link}
        textDecoration="none"
      >
        {category}
      </Link>
      <Link
        color={colors.grey[3]}
        fontSize={2}
        href={link}
        textDecoration="none"
      >
        {language}
      </Link>
      <Link
        color={colors.grey[3]}
        fontSize={2}
        href={link}
        textDecoration="none"
      >
        {description}
      </Link>
    </Flex>
  );
};

export default SnippetRow;
