import React from "react";
import { storiesOf } from "@storybook/react";

import Sidebar from "./Sidebar";
import Box from "../../atoms/Box/Box";

storiesOf("Organisms/Sidebar", module).add("Authentication Sidebar", () => (
  // Arbitrary height to show full length sidebar component
  <Box height={1000} display={"flex"}>
    <Sidebar
      title="Authentications"
      buttonText="New Authentication"
      onClick={() => alert("New Authentication clicked")}
    />
  </Box>
));
