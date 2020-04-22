import styled from "styled-components";
import { border, space, color, layout, flexbox } from "styled-system";

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  border,
  color,
  flexbox,
  layout,
  space
);

export default Box;
