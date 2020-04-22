import React from "react";
import { storiesOf } from "@storybook/react";

import Link from "./Link";

storiesOf("Molecules/Link", module)
  .add("Default", () => <Link href="#">Click here</Link>)
  .add("Styled", () => (
    <Link
      href="#"
      fontFamily="Roboto"
      color="red"
      backgroundColor="blue"
      textDecoration="none"
      fontSize={10}
    >
      Click here
    </Link>
  ));
