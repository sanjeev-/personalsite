import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";
import Snippets from "./Snippets";

const SnippetsConnector = () => {
  const SNIPPETS_QUERY = gql`
    query {
      retrieveCodeSnippets {
        id
        language
        snippetName
        category
        preview
        description
        githubFileName
      }
    }
  `;

  const { loading, error, data } = useQuery(SNIPPETS_QUERY);

  if (loading) {
    return <p>Loading ...</p>;
  } else {
    const snippets = data?.retrieveCodeSnippets;
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
        <Flex alignItems="center" flexDirection="column">
          <Snippets snippets={snippets} />
        </Flex>
      </Flex>
    );
  }
};

export default SnippetsConnector;
