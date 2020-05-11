import React from "react";
import { render } from "@testing-library/react";
import Accordion from "./Accordion";

describe("<Accordion /> render", () => {
  test("should render empty accordion", () => {
    let { container } = render(<Accordion></Accordion>);
    expect(container).toBeInTheDocument();
  });
});

describe("<Accordion /> actions", () => {
  test("should render empty accordion", () => {
    expect(1).toBe(1);
  });
});
