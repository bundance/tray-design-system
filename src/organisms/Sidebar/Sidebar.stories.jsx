import React from "react";
import { storiesOf } from "@storybook/react";

import Sidebar from "./Sidebar";

storiesOf("Organisms/Sidebar", module)
  .add("With Authentication selected", () => (
    <Sidebar
      selectedMenuItem="Authentications"
      onClick={(itemText) => alert(`${itemText} menu clicked`)}
    />
  ))
  .add("With Library selected", () => (
    <Sidebar
      selectedMenuItem="Library"
      onClick={(itemText) => alert(`${itemText} menu clicked`)}
    />
  ));
