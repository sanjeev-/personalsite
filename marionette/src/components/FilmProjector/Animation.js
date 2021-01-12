import React, { useState, useEffect } from "react";
import { Flex, Text } from "../../designSystem";
import "./index.scss";

const Loading = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAnimatedEmoji, setShowAnimatedEmoji] = useState(false);

  useEffect(
    () => {
      let animationTimer = setTimeout(() => setShowAnimatedEmoji(true), 0);
      let titleTimer = setTimeout(() => setShowTitle(true), 15000);

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(titleTimer);
      };
    },
    [] //useEffect will run only one time
    //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  );

  return (
    <Flex
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Flex>
        {showAnimatedEmoji && !showTitle && (
          <Flex height="100%" className="fargoCar">
            🚘
          </Flex>
        )}
        {showTitle && (
          <Text fontSize="60px" letterSpacing="60px" color="black">
            MARRIONETTE
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Loading;
