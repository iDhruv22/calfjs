import React from "react";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import Modal from "./";
import { useState } from "react";

// TODO: add test cases for react portal
describe("<Modal /> render", () => {
  test("empty modal component should redner without an error", () => {
    const { container } = render(<Modal id="testing-modal"></Modal>);
    expect(container).toBeTruthy();
  });
});
