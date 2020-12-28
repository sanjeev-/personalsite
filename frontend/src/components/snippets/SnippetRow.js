import React from "react";
import { Flex, Title, SubHead, Text, Link } from "../../designSystem";
import Pill from "../Pill.js";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const SnippetRow = ({ snippetName, category, language, preview, link }) => {
  return (
    <>
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
        <Pill
          text={category}
          backgroundColor={colors.green[0]}
          fontColor={colors.grey[0]}
        />
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
        {preview}
      </Link>
    </>
  );
};

export default SnippetRow;
