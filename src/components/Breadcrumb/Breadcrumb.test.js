import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "./";

describe("<Breadcrumb /> render", () => {
  test("should render without any child", () => {
    const { container } = render(<Breadcrumb></Breadcrumb>);
    expect(container).not.toBeNull();
  });

  test("should render with children", () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="www.github.com">Github</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );
    expect(container).not.toBeNull();
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelectorAll("li").length).toBe(1);
  });

  test("should apply aria-current for active breadcrumb", () => {
    const { container } = render(
      <Breadcrumb>
        <Breadcrumb.Item active>
          <a href="www.github.com">Github</a>
        </Breadcrumb.Item>
      </Breadcrumb>,
    );

    expect(container).not.toBeNull();
    expect(container.querySelector("ol")).not.toBeNull();
    expect(container.querySelectorAll("li").length).toBe(1);
    expect(
      container.querySelector("a").hasAttribute("aria-current"),
    ).toBeTruthy();
    expect(container.querySelector("a").getAttribute("aria-current")).toBe(
      "page",
    );
  });
});
