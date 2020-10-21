import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

describe("<Button /> render", () => {
  test("renders button without any prop", () => {
    const { getByText } = render(<Button>Testing</Button>);
    const buttonEl = getByText("Testing");
    expect(buttonEl).toBeInTheDocument();
  });

  test("renders button with variant prop", () => {
    const { getByText } = render(<Button varint="warning">Testing</Button>);
    const buttonEl = getByText("Testing");
    expect(buttonEl).toBeInTheDocument();
  });

  test("renders button with unavailable variant", () => {
    const { getByText } = render(<Button varint="wrong">Testing</Button>);
    const buttonEl = getByText("Testing");
    expect(buttonEl).toBeInTheDocument();
  });
});
