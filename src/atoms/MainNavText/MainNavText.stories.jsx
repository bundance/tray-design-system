import React from "react";
import { storiesOf } from "@storybook/react";

import MainNavText from "./MainNavText";

storiesOf("Atoms/Text", module)
  .add("Main Nav Text: Selected", () => (
    <MainNavText selected>Main Nav Item</MainNavText>
  ))
  .add("Main Nav Text: Unselected", () => (
    <MainNavText>Main Nav Item</MainNavText>
  ));
