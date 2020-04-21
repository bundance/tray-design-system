import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

storiesOf("Atoms/Button", module).add("Header Button", () => (
  <Button>Click Here</Button>
));
