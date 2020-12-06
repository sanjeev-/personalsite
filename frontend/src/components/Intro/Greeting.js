import React from "react";
import { Flex, ImpactTitle, Title } from "../../designSystem";

const Greeting = () => {
  return (
    <Flex flexDirection="column" alignItems="left" textAlign="left">
      <Title>Hi, this is </Title>
      <ImpactTitle>Sanjeev Sreetharan</ImpactTitle>
    </Flex>
  );
};

export default Greeting;
