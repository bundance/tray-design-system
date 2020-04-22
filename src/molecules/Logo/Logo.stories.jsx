import React from "react";
import { storiesOf } from "@storybook/react";

import trayIcon from "../../story-assets/icons/trayIcon.png";
import Logo from "./Logo";

storiesOf("Molecules/Logo", module).add("Tray.io Logo", () => (
  <Logo logo={trayIcon} />
));
