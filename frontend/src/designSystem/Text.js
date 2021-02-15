import styled, { css } from "styled-components";
import {
  // Spacing
  space,
  maxWidth,
  minWidth,
  width,

  // Layout
  position,
  display,
  top,
  right,
  justifySelf,
  alignSelf,

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

  // Complex Styles
  textStyle,
} from "styled-system";

// Create a Text component that'll render an <h1> tag with some styles
export const Text = styled.p`
  ${fontSize}
  ${textStyle}
  /* Allow below properties to overwrite textStyle defaults */
  text-decoration: ${(props) => props.textDecoration};
  visibility: ${(props) => props.visibility};
  text-transform: ${(props) => props.textTransform};
  overflow: ${(props) => props.overflow};
  text-overflow: ${(props) => props.textOverflow};
  white-space: ${(props) => props.whiteSpace};
  word-break: ${(props) => props.wordBreak};
  overflow-wrap: ${(props) => props.overflowWrap};
  cursor: ${(props) => props.cursor};
  transform: ${(props) => props.transform};
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
  ${alignSelf}
  ${justifySelf}
  ${space}
  ${color}
  ${fontWeight}
  ${lineHeight}
  ${letterSpacing}
  ${borders}
  ${borderColor}
  ${textAlign}
  ${position}
  ${display}
  ${width}
  ${maxWidth}
  ${minWidth}
  ${top}
  ${right}
  ${borderRadius}
`;

Text.defaultProps = {
  lineHeight: 3,
  fontSize: 3,
  mt: 0,
  mb: 0,
  color: "gray.5",
};
export default Text;
