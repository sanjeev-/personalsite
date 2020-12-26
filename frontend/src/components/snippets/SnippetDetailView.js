import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { Flex, Text, Link } from "../../designSystem";
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
    githubFilePath: "univariate_feature_extractor.py",
    extendedDescription:
      "This is a univariate feature extractor, \n it's very useful in terms of extracting features",
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
      <Flex minWidth="100vw" justifyContent="center" pb={5}>
        <Flex justifyContent="center" maxWidth="1000px" flexDirection="column">
          <Flex width="100%">
            <Flex pr={2} alignItems="center">
              <Link color={colors.grey[2]} href={"/snippets/"}>
                {" "}
                Snippets
              </Link>
            </Flex>
            <Flex pr={2} alignItems="center">
              <Link color={colors.grey[2]}>/</Link>
            </Flex>
            <Flex alignItems="center">
              <Link color={colors.beige[0]}>
                {" "}
                Univariate feature extractor{" "}
              </Link>
            </Flex>
          </Flex>
          <Flex>
            <Flex
              flexDirection="column"
              alignItems="left"
              minWidth="500px"
              pt={5}
            >
              <Text color={colors.grey[3]} fontSize={2} lineHeight="1.5em">
                {snippetDetailData.extendedDescription}
              </Text>
            </Flex>
            <Flex flexDirection="column" px={2}>
              <Flex
                minHeight="400px"
                borderRadius="10px"
                backgroundColor={colors.grey[1]}
              >
                <SyntaxHighlighter
                  language="python"
                  style={a11yDark}
                  customStyle={{ lineHeight: "1.5em", fontSize: "12px" }}
                  showLineNumbers
                >
                  {snippet}
                </SyntaxHighlighter>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SnippetDetailView;
