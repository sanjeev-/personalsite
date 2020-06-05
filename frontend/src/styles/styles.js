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
import styled, { css } from "styled-components";

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

// Base Box component, use as a base to create more specific components
export const Box = styled.div`
  cursor: ${(props) => props.cursor};
  white-space: ${(props) => props.whiteSpace};
  z-index: ${(props) => props.zIndex};
  transition: ${(props) => props.transition};
  transition-delay: ${(props) => props.transitionDelay};
  border-style: ${(props) => props.borderStyle};
  background: ${(props) => props.background};
  border-top-left-radius: ${(props) => props.borderTopLeftRadius};
  border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
  border-top-right-radius: ${(props) => props.borderTopRightRadius};
  border-bottom-right-radius: ${(props) => props.borderBottomRightRadius};
  outline: ${(props) => props.outline};
  transform: ${(props) => props.transform};
  text-transform: ${(props) => props.textTransform};
  filter: ${(props) => props.filter};
  overflow-x: ${(props) => props.overflowX};
  overflow-y: ${(props) => props.overflowY};
  opacity: ${(props) => props.opacity};
  flex-grow: ${(props) => props.flexGrow};
  flex-shrink: ${(props) => props.flexShrink};
  vertical-align: ${(props) => props.verticalAlign};
  animation: ${(props) => props.animation};
  box-sizing: ${(props) => props.boxSizing};
  ${system({ pointerEvents: true })}
  ${(props) =>
    props.hideScrollbar
      ? "scrollbar-width: none; ::-webkit-scrollbar { width: 0; height: 0 }"
      : ""}
  ${(props) =>
    props.overflow === "auto" ||
    props.overflowX === "auto" ||
    props.overflowY === "auto"
      ? "-webkit-overflow-scrolling: touch; position: relative; z-index: 0;"
      : ""}
  ${space}
  ${width}
  ${height}
  ${fontSize}
  ${fontWeight}
  ${color}
  ${textAlign}
  ${position}
  ${display}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${maxWidth}
  ${minWidth}
  ${maxHeight}
  ${minHeight}
  ${overflow}
  ${borders}
  ${borders}
  ${borders}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${lineHeight}
  ${boxShadow}
  ${minHeight}
  ${maxHeight}
  ${flex}
  ${flexWrap}
  ${alignItems}
  ${justifyContent}
  ${flexDirection}
  ${alignContent}
  ${justifySelf}
  ${alignSelf}
  ${gridRow}
  ${gridColumn}
  ${order}
  ${flexBasis}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
`;

// Base Flex component, extends Box
export const Flex = styled(Box)`
  display: flex;
  flex-flow: ${(props) => props.flexFlow};
  ${borderColor}
`;

export default Flex;
