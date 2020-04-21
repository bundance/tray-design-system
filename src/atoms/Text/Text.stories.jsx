import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import theme from "../../theme/theme";
import Text from "./Text";

storiesOf("Atoms/Text", module).add("Simple Text", () => <Text>Text</Text>);
