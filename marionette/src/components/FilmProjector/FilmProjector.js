import React, { useState } from "react";
import { Flex, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import "./index.scss";

const FilmProjector = () => {
  const [introVideoStart, setintroVideoStart] = useState(false);
  return (
    <>
      <div
        className={introVideoStart ? "inner-scratch outer-scratch grain" : ""}
      >
        <Flex flexDirection="column" height="100vh">
          <Flex ml={6} pt="50px" position="absolute">
            <Text
              fontFamily="GiveYouGlory-Regular"
              fontSize={5}
              color={colors.grey[0]}
            >
              marionette
            </Text>
            <Flex position="relative" top="40px" left="3px">
              <img
                width="27px"
                height="39px"
                src="https://marionetteapp-public-assets.s3.amazonaws.com/lp/marionette_man.png"
              />
            </Flex>
          </Flex>

          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <div
              onClick={(e) => {
                setintroVideoStart(true);
              }}
              className="filmproj"
            >
              <img
                width="100px"
                height="100px"
                src="https://marionetteapp-public-assets.s3.amazonaws.com/lp/apple_movie_camera.png"
              />
            </div>
          </Flex>
        </Flex>
      </div>
    </>
  );
};

export default FilmProjector;
