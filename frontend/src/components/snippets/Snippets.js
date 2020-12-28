import { SingleFieldSubscriptionsRule } from "graphql";
import React from "react";
import { Flex, Title, SubHead, Text, Link } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import SnippetRow from "./SnippetRow.js";

const Snippets = ({ snippets }) => {
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
      <Flex justifyContent="space-around" pt={2} width="100%">
        {snippets.map((snip, idx) => (
          <SnippetRow
            key={idx}
            snippetName={snip.snippetName}
            category={snip.category}
            language={snip.language}
            preview={snip.preview}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Snippets;
