import React from "react";
import { render } from "@testing-library/react";
import Alert from "./";

describe("<Alert /> render", () => {
  test("render without any prop", () => {
    const { getByText } = render(<Alert>Testing</Alert>);
    const alertEl = getByText("Testing");
    expect(alertEl).toBeInTheDocument();
  });

  test("render with the valid variant", () => {
    const { getByText } = render(<Alert variant="info">Info</Alert>);
    const alertEl = getByText("Info");
    expect(alertEl).toBeInTheDocument();
  });

  test("render with wantClose=true prop", () => {
    const { getByText } = render(
      <Alert variant="info" wantClose={true}>
        Info
      </Alert>,
    );
    const closeButton = getByText("x");
    expect(closeButton).toBeInTheDocument();
  });

  test("render with wantClose=false prop", () => {
    const { container } = render(
      <Alert variant="info" wantClose={false}>
        Info
      </Alert>,
    );
    expect(container.querySelectorAll("span").length).toBe(0);
  });
});

describe("<Alert /> action", () => {});
