import styled, { css } from "styled-components";
import { pseudoStyle } from "./utils";
import { colors } from "./theme";
import {
  system,

  // Spacing
  space,
  maxWidth,
  minWidth,
  width,
  maxHeight,
  minHeight,
  height,

  // Layout
  position,
  display,
  zIndex,
  top,
  right,
  bottom,
  left,
  overflow,

  // Flex
  alignItems,
  justifyContent,
  justifyItems,
  flexWrap,
  flexDirection,
  flex,
  alignContent,
  justifySelf,
  alignSelf,
  order,
  flexBasis,

  // Grid
  gridGap,
  gridRowGap,
  gridColumnGap,
  gridColumn,
  gridRow,
  gridArea,
  gridAutoFlow,
  gridAutoRows,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateColumns,
  gridTemplateAreas,

  // Typography
  color,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,

  // Decorative
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,

  // Complex Styles
  textStyle,
  buttonStyle,
} from "styled-system";

const themeKeys = {
  color: "colors",
  backgroundColor: "colors",
  borderColor: "colors",
  boxShadow: "shadows",
};

const hover = pseudoStyle({
  prop: "hover",
  pseudoclass: "hover",
  keys: themeKeys,
});

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.a`
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  cursor: pointer;
  transition: ${(props) => props.transition};
  opacity: ${(props) => props.opacity};
  ${(props) =>
    props.numLinesToTruncate
      ? css`
      overflow: hidden;
      position: relative;
      max-height: calc(${props.lineHeight} * ${props.numLinesToTruncate})};
      text-align: justify;
      margin-right: -1em;
      padding-right: 1em;
      word-break: break-all;
      &:before {
        content: "...";
        position: absolute;
        right: 0;
        bottom: 0;
      }
      &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        margin-top: 0.25em;
      }`
      : ""}
  ${width}
  ${height}
  ${hover}
  ${color}
  ${space}
  ${width}
  ${display}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${fontSize}
  ${fontWeight}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${alignSelf}
  ${textAlign}
  ${flexDirection}
  ${justifyContent}
`;

Link.defaultProps = {
  fontSize: 3,
  transition: "color 0.2s, border-color 0.2s, opacity 0.2s",
};

export default Link;
