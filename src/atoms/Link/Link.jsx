import React from "react";
import styled from "styled-components";
import { system } from "styled-system";

system({
  prop: "textDecoration",
  cssProperty: "textDecoration",
});

// Create a styled Link
export const StyledLink = styled.a`
  ${system({
    textDecoration: true,
    fontFamily: true,
    fontSize: {
      property: "fontSize",
      scale: "fontSizes",
    },
    color: {
      property: "color",
      scale: "colors",
    },
    backgroundColor: {
      property: "backgroundColor",
      scale: "background",
    },
    fontWeight: {
      property: "fontWeight",
      scale: "fontWeights",
    },
    margin: {
      property: "margin",
      scale: "space",
    },
    marginLeft: {
      property: "margin",
      scale: "space",
    },
    marginRight: {
      property: "margin",
      scale: "space",
    },
    padding: {
      property: "padding",
      scale: "space",
    },
    textAlign: true,
  })}
`;

// The Link component itself is a styled link wih a custom onClick event handler passed
const Link = (props) => (
  <StyledLink
    {...props}
    onClick={(e) => {
      e.preventDefault();
      props.onClick(e);
    }}
  />
);

export default Link;
