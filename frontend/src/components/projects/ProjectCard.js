import React, { useState } from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const ProjectCard = ({ title, subtitle, coverPhotoUrl, onClickRoute }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      height="400px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => (window.location.href = onClickRoute)}
    >
      <Flex
        width="400px"
        height="400px"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderRadius="10px"
        m={4}
        backgroundColor={colors.grey[1]}
        backgroundImage={`url(${coverPhotoUrl})`}
        filter={isHovered ? `grayscale(50%)` : `grayscale(100%)`}
        transition={"filter 0.25s ease-in-out"}
      >
        {isHovered && (
          <Flex
            backgroundColor={colors.grey[1]}
            alignItems="center"
            width="100%"
          >
            <Flex px={3}>
              <Text fontSize={3} fontWeight={700} color={colors.beige[0]}>
                {title}
              </Text>
            </Flex>
            <Flex px={3}>
              <Text color={colors.grey[2]} fontSize={1}>
                {subtitle}
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default ProjectCard;
