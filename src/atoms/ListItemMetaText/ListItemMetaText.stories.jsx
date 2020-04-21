import React from "react";
import { storiesOf } from "@storybook/react";

import ListItemMetaText from "./ListItemMetaText";

storiesOf("Atoms/Text", module).add("List Item Meta Text", () => (
  <ListItemMetaText selected>List Item Meta</ListItemMetaText>
));
