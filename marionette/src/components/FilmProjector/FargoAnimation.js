import React, { useState, useEffect } from "react";
import { Flex, Text } from "../../designSystem";
import Welcome from "./Welcome";
import "./index.scss";

const FargoAnimation = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showAnimatedEmoji, setShowAnimatedEmoji] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(
    () => {
      let animationTimer = setTimeout(() => setShowAnimatedEmoji(true), 10);
      let titleTimer = setTimeout(() => setShowTitle(true), 10000);
      let endTitleTimer = setTimeout(() => setShowTitle(false), 13000);
      let endAnimationTimer = setTimeout(
        () => setShowAnimatedEmoji(false),
        10000
      );
      let showMenuTimer = setTimeout(() => setShowMenu(true), 13000);

      // this will clear Timeout when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(titleTimer);
        clearTimeout(animationTimer);
        clearTimeout(endTitleTimer);
        clearTimeout(endAnimationTimer);
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
        {showMenu && <Welcome />}
      </Flex>
    </Flex>
  );
};

export default FargoAnimation;
