import React from "react";
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from "styled-system";
import styled from "styled-components";

const Text = styled.span(
  color,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  space
);

Text.propTypes = {
  ...color.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
};

Text.defaultProps = {
  color: "textRegular",
  fontFamily: "Nunito Sans",
  fontStyle: "normal",
  fontSize: 5,
};

export default Text;
