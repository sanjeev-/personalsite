import React from "react";
import Flex from "../../../styles/styles.js";
import Title from "../../styledBaseComponents/Title";
import SubHead from "../../styledBaseComponents/SubHead";
import Text from "../../styledBaseComponents/Text";
import Header from "../../Header.js";
import zoraVid from "./videos/2020_06_14_hiking.mov";

const ZoraProject = () => {
  return (
    <Flex
      minHeight="100vh"
      minWidth="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <video src={zoraVid} loop autoPlay />
    </Flex>
  );
};

export default ZoraProject;
