import React from "react";

import { render } from "@testing-library/react";
import Box from "./Box";

test("it renders correctlyy", () => {
  const { container } = render(<Box />);
  expect(container.firstChild).toMatchSnapshot();
});
