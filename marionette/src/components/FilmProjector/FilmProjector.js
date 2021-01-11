import React, { useState } from "react";
import { Flex, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import "./index.scss";

const FilmProjector = () => {
  const [introVideoStart, setintroVideoStart] = useState(false);
  return (
    <>
      <Flex minHeight="100vh" flexDirection="column">
        <Flex
          position="absolute"
          width="100vw"
          height={introVideoStart ? "125px" : "0px"}
          transition="all 1s ease-in-out"
          backgroundColor="black"
        ></Flex>
        <div
          className={introVideoStart ? "inner-scratch outer-scratch grain" : ""}
          id="grain-filter"
          position="relative"
          flexBasis="0"
        >
          <Flex flexDirection="column" height="100vh" id="content">
            {!introVideoStart && (
              <Flex ml={6} pt="50px" position="absolute" id="logo">
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
            )}
            <Flex
              flexDirection="column"
              minHeight="100%"
              justifyContent="center"
              alignItems="center"
            >
              <div
                onClick={(e) => {
                  setintroVideoStart(true);
                }}
                className="filmproj"
                style={{ cursor: "pointer" }}
              >
                <img
                  width="100px"
                  height="100px"
                  src="https://marionetteapp-public-assets.s3.amazonaws.com/lp/apple_movie_camera.png"
                />
              </div>
            </Flex>
          </Flex>
          <Flex
            id="hello"
            height={introVideoStart ? "125px" : "0px"}
            width="100%"
            backgroundColor="black"
            transition="all 1s ease-in-out"
            bottom="0"
            display="block"
            position="absolute"
            overflow="none"
          >
            <Flex backgroundColor="black" height="100%"></Flex>
          </Flex>
        </div>
      </Flex>
    </>
  );
};

export default FilmProjector;
