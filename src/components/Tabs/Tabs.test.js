import React from "react";
import {
  render,
  getAllByRole,
  getByRole,
  fireEvent,
} from "@testing-library/react";
import Tabs from "./";

describe("<Tabs /> render", () => {
  test("should render tabs wihtout error", () => {
    const { container } = render(
      <Tabs>
        <Tabs.Panel>Hello</Tabs.Panel>
      </Tabs>,
    );
    expect(container).toBeInTheDocument();
  });

  test("should render all the tabs panel in the <Tabs /> component", async () => {
    const { container } = render(
      <Tabs>
        <Tabs.Panel>Hello</Tabs.Panel>
        <Tabs.Panel>Hello1</Tabs.Panel>
      </Tabs>,
    );
    expect(container.querySelectorAll("[role='tabpanel']").length).toBe(2);
  });

  test("should render the tabs list in the <Tabs /> component", () => {
    const { getByRole } = render(
      <Tabs>
        <Tabs.Panel title="tab">Hello</Tabs.Panel>
        <Tabs.Panel title="tab1">Hello1</Tabs.Panel>
      </Tabs>,
    );
    const tablist = getByRole("tablist");
    expect(tablist).toBeInTheDocument();
  });

  test("should render the tabs list elements in the <Tabs /> component", () => {
    const { getAllByText } = render(
      <Tabs>
        <Tabs.Panel title="tab">Hello</Tabs.Panel>
        <Tabs.Panel title="tab1">Hello1</Tabs.Panel>
      </Tabs>,
    );
    const tablistElements = getAllByText(/tab/i);
    expect(tablistElements).toHaveLength(2);
  });

  test("should render the tab panel content in the <Tabs /> component", () => {
    const { getAllByText } = render(
      <Tabs>
        <Tabs.Panel title="tab">Hello</Tabs.Panel>
        <Tabs.Panel title="tab1">Hello1</Tabs.Panel>
      </Tabs>,
    );
    const tablistElements = getAllByText(/Hello/i);
    expect(tablistElements).toHaveLength(2);
  });
});

describe("<Tabs /> action", () => {
  test("should render correct content in panel", () => {
    const { getByText } = render(
      <Tabs>
        <Tabs.Panel title="tab one">Panel one</Tabs.Panel>
        <Tabs.Panel title="tab two">Panel two</Tabs.Panel>
      </Tabs>,
    );

    const panel1 = getByText(/Panel one/i);
    expect(panel1.hasAttribute("hidden")).toBeFalsy();

    const tab2 = getByText(/tab two/i);
    fireEvent.click(tab2);

    const panel2 = getByText(/Panel two/i);
    expect(panel2.hasAttribute("hidden")).toBeFalsy();
    expect(panel1.hasAttribute("hidden")).toBeTruthy();
  });
});
