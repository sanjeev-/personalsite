import styled from "styled-components";

// Create a Title component that'll render an <h1> tag with some styles
const Link = styled.h1`
  font-size: 1.25em;
  text-align: center;
  color: black;
  font-family: "WorkSans-Light";
  &:hover {
    background-color: black;
    color: #08d9d6;
  }
`;

export default Link;
