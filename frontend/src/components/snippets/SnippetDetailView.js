import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  nightOwl,
  shadesOfPurple,
  obsidian,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const SnippetDetailView = () => {
  const snippetDetailData = {
    snippetName: "",
    code: "",
    extendedDescription: "",
  };
  const codeString = "(num) => num + 1 \n return blah";
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
                language="javascript"
                style={shadesOfPurple}
                customStyle={{ lineHeight: "1.75em", fontSize: "18px" }}
                showLineNumbers
              >
                {codeString}
              </SyntaxHighlighter>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SnippetDetailView;
