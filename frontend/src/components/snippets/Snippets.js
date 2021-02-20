import React from "react";
import { Flex } from "coppola";
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
      primary
    >
      <Flex pb={4}>
        <Searchbar />
      </Flex>
      <Flex pt={2} width="100%" flexDirection="column">
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
