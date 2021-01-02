import React, { useState } from "react";
import { Flex, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";

const ProjectCard = ({ title, subtitle, coverPhotoUrl, onClickRoute }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div
        height="400px"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Flex
          width="400px"
          height="400px"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          borderRadius="10px"
          style={{ cursor: "pointer" }}
          mx={4}
          onClick={() => (window.location.href = onClickRoute)}
          backgroundColor={colors.grey[1]}
          backgroundImage={`url(${coverPhotoUrl})`}
          filter={isHovered ? `grayscale(50%)` : `grayscale(100%)`}
          transition={"filter 0.25s ease-in-out"}
        />
        {isHovered && (
          <Flex
            backgroundColor={colors.grey[0]}
            alignItems="center"
            width="100%"
            px={4}
          >
            <Flex pr={2} alignItems="bottom">
              <Text fontSize={2} fontWeight={700} color={colors.grey[3]}>
                {title}
              </Text>
            </Flex>
            <Flex alignItems="bottom">
              <Text color={colors.grey[2]} fontSize={1}>
                {subtitle}
              </Text>
            </Flex>
          </Flex>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
