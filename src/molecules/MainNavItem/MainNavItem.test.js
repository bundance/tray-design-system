import React from "react";
import { fireEvent, render } from "@testing-library/react";

import MainNavItem from "./MainNavItem";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

test("it renders correctly when not selected", () => {
  const { container } = render(
    <MainNavItem itemText="navItem" href="#" faIcon={faCoffee} />
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it renders correctly when selected", () => {
  const { container } = render(
    <MainNavItem itemText="navItem" href="#" faIcon={faCoffee} selected />
  );
  expect(container.firstChild).toMatchSnapshot();
});

test("it does not render a chevron when not selected", () => {
  const { getAllByTestId, debug } = render(
    <MainNavItem itemText="navItem" href="#" faIcon={faCoffee} />
  );

  const icons = getAllByTestId("icon");

  expect(icons.length).toBe(1);
});

test("it renders a chevron when selected", () => {
  const { getAllByTestId, debug } = render(
    <MainNavItem itemText="navItem" href="#" faIcon={faCoffee} selected />
  );

  const icons = getAllByTestId("icon");

  expect(icons.length).toBe(2);
});
