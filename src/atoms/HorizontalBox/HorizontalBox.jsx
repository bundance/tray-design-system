import React from "react";
import styled from "styled-components";

import Box from "../Box/Box";

const HorizontalBox = (props) => <Box {...props} />;

HorizontalBox.defaultProps = {
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

export default HorizontalBox;
