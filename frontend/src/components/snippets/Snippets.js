import React from "react";
import { Flex, Title, SubHead, Text, Link } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import SnippetRow from "./SnippetRow.js";
import Searchbar from "./Searchbar.js";

const Snippets = ({ snippets }) => {
  return (
    <Flex
      minWidth="1000px"
      minHeight="800px"
      borderRadius="8px"
      flexDirection="column"
      alignItems="center"
      backgroundColor={colors.grey[0]}
    >
      <Flex pb={4}>
        <Searchbar />
      </Flex>
      <Flex pt={2} width="100%">
        {snippets.map((snip, idx) => (
          <SnippetRow
            key={idx}
            snippetName={snip.snippetName}
            category={snip.category}
            language={snip.language}
            preview={snip.preview}
            link={`snippets/${snip.id}`}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default Snippets;
