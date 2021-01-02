import React, { useState } from "react";
import { Flex, Text, Link } from "../../designSystem";
import { colors } from "../../designSystem/theme";
import "./index.css";

const GithubLink = ({ githubFileName }) => {
  const githubLink = `https://github.com/sanjeev-/snippets/blob/main/${githubFileName}`;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex height="50px">
        <Flex style={{ display: "inline" }} pr={2}>
          <Link href={githubLink} target="_blank">
            {isHovered ? (
              <img
                width="20px"
                height="20px"
                src="https://sanjeev-personal-site.s3.amazonaws.com/snippets/github_icon_hovered.png"
              />
            ) : (
              <img
                width="20px"
                height="20px"
                src="https://sanjeev-personal-site.s3.amazonaws.com/snippets/github_icon.png"
              />
            )}
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default GithubLink;
