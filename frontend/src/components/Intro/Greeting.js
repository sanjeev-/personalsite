import React from "react";
import Title from "../styledBaseComponents/Title";
import ImpactTitle from "../styledBaseComponents/ImpactTitle";
import Flex from "../../styles/styles.js";

const Greeting = () => {
  return (
    <Flex flexDirection="column" alignItems="left" textAlign="left">
      <Title>Hi, this is </Title>
      <ImpactTitle>Sanjeev Sreetharan's</ImpactTitle>
      <Title> personal website</Title>
    </Flex>
  );
};

export default Greeting;
