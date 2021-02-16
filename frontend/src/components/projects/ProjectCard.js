import React, { useState } from "react";
import { Flex, Text } from "coppola";

const ProjectCard = ({ title, subtitle, coverPhotoUrl, onClickRoute }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Flex pt={3}>
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

        <Flex primary alignItems="center" width="100%" px={4} height="50px">
          <Flex pr={2} alignItems="bottom">
            <Text primary fontSize={2} fontWeight={700}>
              {isHovered && title}
            </Text>
          </Flex>
          <Flex alignItems="bottom">
            <Text muted fontSize={2}>
              {isHovered && subtitle}
            </Text>
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
};

export default ProjectCard;
