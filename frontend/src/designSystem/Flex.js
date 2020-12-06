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
