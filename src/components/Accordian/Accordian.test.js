import React from "react";
import { render } from "@testing-library/react";
import Accordian from "./Accordian";

describe("<Accordian /> render", () => {
  test("should render empty accordian", () => {
    let { container } = render(<Accordian></Accordian>);
    expect(container).toBeInTheDocument();
  });
});

describe("<Accordian /> actions", () => {
  test("should render empty accordian", () => {
    expect(1).toBe(1);
  });
});
