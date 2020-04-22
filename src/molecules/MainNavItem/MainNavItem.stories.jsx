import React from "react";
import { storiesOf } from "@storybook/react";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import MainNavItem from "./MainNavItem";

storiesOf("Molecules/MainNavItem", module)
  .add("Unselected", () => (
    <MainNavItem itemText="Dashboard" href="#" faIcon={faHome} />
  ))
  .add("Selected", () => (
    <MainNavItem itemText="Dashboard" href="#" faIcon={faHome} selected />
  ));
