import React, { useState } from "react";
import { Flex, Text, Link } from "../../designSystem";

const Letterboxd = () => {
  const githubLink = `https://letterboxd.com/_jeev/`;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex>
        <Flex style={{ display: "inline" }}>
          <Link href={githubLink} target="_blank">
            {isHovered ? (
              <img
                width="20px"
                height="20px"
                src="https://sanjeev-personal-site.s3.amazonaws.com/about/letterboxd_icon_hovered.png"
              />
            ) : (
              <img
                width="20px"
                height="20px"
                src="https://sanjeev-personal-site.s3.amazonaws.com/about/letterboxd_icon.png"
              />
            )}
          </Link>
        </Flex>
      </Flex>
    </div>
  );
};

export default Letterboxd;
