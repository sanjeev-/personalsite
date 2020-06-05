import React, { useEffect, useState } from "react";
import Flex from "../styles/styles.js";
import DrawArea from "./DrawArea";

const DrawAreaConnector = () => {
  const [fadeIn, setFadeIn] = useState(false);
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Flex opacity={fadeIn ? 1 : 0} transition="1s opacity ease-in">
      <DrawArea />
    </Flex>
  );
};

export default DrawAreaConnector;
