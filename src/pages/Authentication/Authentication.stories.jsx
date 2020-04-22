import React from "react";
import { storiesOf } from "@storybook/react";

import Authentication from "./Authentication";

storiesOf("Pages/Authentication", module).add("Authentication page", () => (
  <Authentication />
));
