import React from "react";
import Title from "../styledBaseComponents/Title";
import ImpactTitle from "../styledBaseComponents/ImpactTitle";

const Greeting = () => {
  return (
    <React.Fragment>
      <Title>Hi, this is </Title>
      <ImpactTitle>Sanjeev Sreetharan's</ImpactTitle>
      <Title> personal website</Title>
    </React.Fragment>
  );
};

export default Greeting;
