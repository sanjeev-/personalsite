import React, { useState } from "react";
import { Flex, Title, SubHead, Text } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import Header from "../Header.js";

const ProjectCard = ({ title, subtitle, coverPhotoUrl, onClickRoute }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={console.log("entered")}
      onMouseLeave={console.log("leave")}
      onClick={onClickRoute}
    >
      <Flex
        width="400px"
        height="400px"
        flexDirection="column"
        justifyContent="flex-end"
        borderRadius="10px"
        m={4}
        backgroundColor={colors.grey[1]}
        backgroundImage={`url(${coverPhotoUrl})`}
        filter={`grayscale(100%)`}
      >
        <Flex px={3}>
          <Text>{title}</Text>
        </Flex>
        <Flex px={3}>
          <Text>{subtitle}</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default ProjectCard;
