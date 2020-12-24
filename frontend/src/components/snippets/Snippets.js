import React from "react";
import { Flex, Title, SubHead, Text, Link } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import SnippetRow from "./SnippetRow.js";

const Snippets = () => {
  const snippetsData = [
    {
      snippetName: "Univariate feature extractor",
      category: "ML",
      language: "Python",
      description: "This is a useful class that helps with feature extraction!",
    },
  ];
  return (
    <Flex
      minWidth="1000px"
      minHeight="800px"
      borderRadius="8px"
      flexDirection="column"
      backgroundColor={colors.grey[1]}
    >
      <Flex justifyContent="space-around" pt={2}>
        <Link color={colors.beige[0]} fontSize={2}>
          Snippet
        </Link>
        <Link color={colors.beige[0]} fontSize={2}>
          Category
        </Link>
        <Link color={colors.beige[0]} fontSize={2}>
          Language
        </Link>
        <Link color={colors.beige[0]} fontSize={2}>
          Description
        </Link>
      </Flex>
      <SnippetRow
        snippetName={snippetsData[0].snippetName}
        category={snippetsData[0].category}
        language={snippetsData[0].language}
        description={snippetsData[0].description}
        link={"/snippets/univariate-feature-extractor"}
      />
    </Flex>
  );
};

export default Snippets;
