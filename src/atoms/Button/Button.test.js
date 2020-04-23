import React from "react";

import { render } from "@testing-library/react";
import Button from "./Button";

test("it renders correctlyy", () => {
  const { container } = render(<Button />);
  expect(container.firstChild).toMatchSnapshot();
});
