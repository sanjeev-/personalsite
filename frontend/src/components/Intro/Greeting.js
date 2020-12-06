import React from "react";
import Title from "../styledBaseComponents/Title";
import ImpactTitle from "../styledBaseComponents/ImpactTitle";
import { Flex } from "../../designSystem";

const Greeting = () => {
  return (
    <Flex flexDirection="column" alignItems="left" textAlign="left">
      <Title>Hi, this is </Title>
      <ImpactTitle>Sanjeev Sreetharan</ImpactTitle>
    </Flex>
  );
};

export default Greeting;
