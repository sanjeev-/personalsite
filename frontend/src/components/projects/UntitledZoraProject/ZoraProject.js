import React, { useState } from "react";
import { Flex, Text } from "coppola";
import moment from "moment";
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
  const { loading, error, data } = useQuery(GET_ZORA_SNIPPETS);
  const [zoraSnippet, setZoraSnippet] = useState({
    path:
      "https://sanjeev-personal-site.s3.amazonaws.com/zora-snippets/2020_04_10_playing.mov",
  });
  const getZoraVideo = () => {
    const snippets = data?.retrieveZoraSnippets;
    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    setZoraSnippet(randomSnippet);
  };
  if (loading) {
    return <p>Loading ...</p>;
  } else {
    return (
      <Flex
        minHeight="100vh"
        minWidth="100vw"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          getZoraVideo();
        }}
      >
        <Flex
          position="absolute"
          justifyContent="center"
          bottom="25px"
          flexDirection="column"
        >
          <Text>{zoraSnippet.title}</Text>
          <Text>{moment(zoraSnippet.date).format("MMMM Do, YYYY")}</Text>
        </Flex>
        <video src={zoraSnippet.path} loop autoPlay muted />
      </Flex>
    );
  }
};

export default ZoraProject;
