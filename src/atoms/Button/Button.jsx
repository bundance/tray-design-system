import React from "react";
import {
  background,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from "styled-system";
import styled from "styled-components";

const Button = styled.button(
  background,
  borderRadius,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space
);

Button.propTypes = {
  ...background.propTypes,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
};

Button.defaultProps = {
  color: "white",
  background: "buttonBlue",
  borderRadius: 3,
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontSize: 6,
  fontWeight: 5,
  paddingX: 16,
  paddingY: 9,
};

export default Button;
