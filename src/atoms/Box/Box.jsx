import React from "react";
import { space, width, fontSize, color } from "styled-system";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

const StyledBox = styled.div`
  ${color}
  ${fontSize}
  ${space}
  ${width}
`;

export default () => (
  <ThemeProvider theme={theme}>
    <StyledBox p={3} bg="whites.10" color="orange">
      This is a Box
    </StyledBox>
  </ThemeProvider>
);
