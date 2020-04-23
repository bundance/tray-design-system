import React from "react";

import { fireEvent, render } from "@testing-library/react";
import Link from "./Link";

test("it renders correctlyy", () => {
  const { container } = render(<Link />);
  expect(container.firstChild).toMatchSnapshot();
});

test("it calls callback function on click", () => {
  const mockCallback = jest.fn();
  const { getByText } = render(<Link onClick={mockCallback}>link</Link>);

  expect(mockCallback).not.toHaveBeenCalled();

  const link = getByText("link");
  fireEvent(
    link,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  expect(mockCallback).toHaveBeenCalled();
});
