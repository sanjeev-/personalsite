import React, { useState } from "react";
import { Flex, Text } from "coppola";
import Pill from "../Pill.js";
import { colors } from "../../designSystem/theme";
import { toTitleCase } from "./utils";

const handlePill = (text) => {
  const pillObject = {
    DATA_SCIENCE: {
      backgroundColor: colors.green[0],
      formattedText: "Data science",
      fontColor: colors.grey[0],
    },
  };
  return pillObject[text];
};

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
        style={{ cursor: "pointer" }}
        borderRadius="10px"
        border="1px solid"
        borderColor={isHovered ? colors.purple[0] : colors.grey[0]}
        transition="border-color 0.2s ease-in"
        primary
      >
        <Text fontSize={2} primary>
          {snippetName}
        </Text>
        <Text primary fontSize={2}>
          <Pill text={category} handle={handlePill} />
        </Text>
        <Text primary fontSize={2}>
          {toTitleCase(language)}
        </Text>
        <Text primary fontSize={2}>
          {preview}
        </Text>
      </Flex>
    </div>
  );
};

export default SnippetRow;
