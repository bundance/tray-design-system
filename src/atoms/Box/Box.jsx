import styled from "styled-components";
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
} from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  border,
  color,
  flexbox,
  layout,
  space,
  typography
);

export default Box;
