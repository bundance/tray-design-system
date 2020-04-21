import React from "react";
import { storiesOf } from "@storybook/react";

import HeaderText from "./HeaderText";

storiesOf("Atoms/Text", module).add("Header Text", () => (
  <HeaderText>Header Text</HeaderText>
));
