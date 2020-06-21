import React, { useEffect, useState } from "react";
import Flex from "../../../styles/styles.js";
import Title from "../../styledBaseComponents/Title";
import SubHead from "../../styledBaseComponents/SubHead";
import Text from "../../styledBaseComponents/Text";
import Header from "../../Header.js";
import zoraVid from "./videos/2020_06_14_hiking.mov";
import retrieveZoraSnippets from "../../../graphql/queries/retrieveZoraSnippets.graphql";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_ZORA_SNIPPETS = gql`
  query {
    retrieveZoraSnippets {
      date
      title
      path
    }
  }
`;

const ZoraProject = () => {
  const [zoraSnippet, setZoraSnippet] = useState(null);
  // const { loading, error, data } = useQuery(GET_ZORA_SNIPPETS);
  return (
    <Flex
      minHeight="100vh"
      minWidth="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <video src={zoraVid} loop autoPlay muted />
    </Flex>
  );
};

export default ZoraProject;
