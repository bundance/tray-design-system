import React from "react";
import { storiesOf } from "@storybook/react";

import Header from "./Header";

storiesOf("Organisms/Header", module)
  .add("Authentication Header", () => (
    <Header
      title="Authentications"
      buttonText="New Authentication"
      onClick={() => alert("New Authentication clicked")}
    />
  ))
  .add("Dashboard Header", () => (
    <Header
      title="Dashboard"
      buttonText="New Workflow"
      onClick={() => alert("New Workflow button clicked")}
    />
  ));
