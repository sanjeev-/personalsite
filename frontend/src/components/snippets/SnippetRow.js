import React, { useState } from "react";
import { Flex, Text } from "../../designSystem";
import Pill from "../Pill.js";
import { colors } from "../../designSystem/theme";

const SnippetRow = ({ snippetName, category, language, preview, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = link)}
      width="100%"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={3}
        minWidth="1000px"
        minHeight="100px"
        borderRadius="10px"
        border="1px solid"
        borderColor={isHovered ? colors.purple[0] : colors.grey[0]}
        transition="border-color 0.2s ease-in"
      >
        <Text color={colors.grey[3]} fontSize={2} textDecoration="none">
          {snippetName}
        </Text>
        <Text color={colors.grey[3]} fontSize={2} textDecoration="none">
          <Pill
            text={category}
            backgroundColor={colors.green[0]}
            fontColor={colors.grey[0]}
          />
        </Text>
        <Text color={colors.grey[2]} fontSize={2} textDecoration="none">
          {language}
        </Text>
        <Text color={colors.grey[2]} fontSize={2} textDecoration="none">
          {preview}
        </Text>
      </Flex>
    </div>
  );
};

export default SnippetRow;
