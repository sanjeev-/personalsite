import styled from "styled-components";
import { colors } from "./theme";

// Create a Text component that'll render an <h1> tag with some styles
const Text = styled.h3`
  font-size: 1em;
  text-align: left;
  color: ${colors.purple[1]};
  font-family: "WorkSans-Light";
`;

export default Text;
