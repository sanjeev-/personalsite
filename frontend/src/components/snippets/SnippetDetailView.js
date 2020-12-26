import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  nightOwl,
  shadesOfPurple,
  obsidian,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Flex, Text } from "../../designSystem";
import { getFileFromGithub } from "../../utils/api";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const SnippetDetailView = () => {
  const [snippet, setSnippet] = useState("");
  useEffect(() => {
    const myCodeStr = getFileFromGithub(
      "univariate_feature_extractor.py"
    ).then((res) => setSnippet(res));
  }, []);
  const snippetDetailData = {
    snippetName: "",
    code: "",
    extendedDescription: "",
  };

  return (
    <Flex
      minWidth="100vw"
      minHeight="100vh"
      flexDirection="column"
      backgroundColor={colors.grey[0]}
    >
      <Flex px={5} py={4}>
        <Header />
      </Flex>
      <Flex
        alignItems="center"
        flexDirection="row"
        justifyContent="space-around"
      >
        <Flex flexDirection="column">blah blah blah description</Flex>
        <Flex flexDirection="column">
          <Flex
            minHeight="400px"
            borderRadius="10px"
            backgroundColor={colors.grey[1]}
          >
            <Text color={colors.grey[2]}>
              <SyntaxHighlighter
                language="python"
                style={nightOwl}
                customStyle={{ lineHeight: "1.5em", fontSize: "12px" }}
                showLineNumbers
              >
                {snippet}
              </SyntaxHighlighter>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SnippetDetailView;
