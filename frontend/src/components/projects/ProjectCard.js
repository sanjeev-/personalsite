import React, { useState } from "react";
import { Flex, Text } from "coppola";

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
          secondary
          width="400px"
          height="400px"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          borderRadius="10px"
          style={{ cursor: "pointer" }}
          mx={4}
          onClick={() => (window.location.href = onClickRoute)}
          backgroundImage={`url(${coverPhotoUrl})`}
          filter={isHovered ? `grayscale(50%)` : `grayscale(100%)`}
          transition={"filter 0.25s ease-in-out"}
        />
        {isHovered && (
          <Flex primary alignItems="center" width="100%" px={4}>
            <Flex pr={2} alignItems="bottom">
              <Text primary fontSize={2} fontWeight={700}>
                {title}
              </Text>
            </Flex>
            <Flex alignItems="bottom">
              <Text muted fontSize={2}>
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
