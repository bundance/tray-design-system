import React from "react";
import { storiesOf } from "@storybook/react";

import Body from "./Body";

storiesOf("Organisms/Body", module).add("Blank Body", () => (
  <Body>Some text in a blank body</Body>
));
