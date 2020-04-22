import React from "react";
import { storiesOf } from "@storybook/react";

import homeIcon from "../../story-assets/icons/HomeIcon-Light.png";
import Icon from "./Icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

storiesOf("Atoms/Icon", module)
  .add("FontAwesome Coffee Icon", () => <Icon faIcon={faCoffee} alt="Coffee" />)
  .add("Image icon", () => <Icon iconSrc={homeIcon} alt="Home" />);
