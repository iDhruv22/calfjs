import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("<Accordion /> render", () => {
  test("should render empty accordion", () => {
    let { container } = render(<Accordion></Accordion>);
    expect(container).toBeInTheDocument();
  });

  test("should render accordion panel", () => {
    let { getByRole } = render(
      <Accordion>
        <Accordion.Panel></Accordion.Panel>
      </Accordion>,
    );
    const header = getByRole(/button/i);
    expect(header).toBeInTheDocument();
  });

  test("should render accordion panel with the text", () => {
    let { getByRole } = render(
      <Accordion>
        <Accordion.Panel>hello</Accordion.Panel>
      </Accordion>,
    );
    const accordionBody = getByRole("region");
    expect(accordionBody).toBeInTheDocument();
  });

  test("should render accordion based on given extended props", () => {
    let { getByText, rerender } = render(
      <Accordion expanded={[false]}>
        <Accordion.Panel>hello</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText(/hello/i).hasAttribute("hidden")).toBeTruthy();

    rerender(
      <Accordion expanded={[true]}>
        <Accordion.Panel>hello</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText(/hello/i).hasAttribute("hidden")).toBeFalsy();
  });

  test("should render multiple panel of the accordion based on given extended props", () => {
    let { getByText, rerender } = render(
      <Accordion expanded={[false, true]}>
        <Accordion.Panel>hello</Accordion.Panel>
        <Accordion.Panel>hello1</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText("hello").hasAttribute("hidden")).toBeTruthy();
    expect(getByText("hello1").hasAttribute("hidden")).toBeFalsy();

    rerender(
      <Accordion expanded={[true, false]}>
        <Accordion.Panel>hello</Accordion.Panel>
        <Accordion.Panel>hello1</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText("hello").hasAttribute("hidden")).toBeFalsy();
    expect(getByText("hello1").hasAttribute("hidden")).toBeTruthy();
  });

  test("should display the title for the accordian", () => {
    let { getByText } = render(
      <Accordion expanded={[false]}>
        <Accordion.Panel title="Title">hello</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText(/Title/i)).toBeInTheDocument();
  });
});

describe("<Accordion /> actions", () => {
  test("should open the closed accordion onclick on header[ControlledComponent]", () => {
    const onToggleMock = jest.fn();

    let { getByText } = render(
      <Accordion expanded={[false]} onToggle={onToggleMock}>
        <Accordion.Panel title="Title">hello</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText("hello").hasAttribute("hidden")).toBeTruthy();
    fireEvent.click(getByText(/Title/i));
    expect(onToggleMock).toHaveBeenCalledWith(0);
  });

  test("should close the opened accordion onclick on header[UnControlledComponent]", () => {
    let { getByText } = render(
      <Accordion>
        <Accordion.Panel title="Title">hello</Accordion.Panel>
      </Accordion>,
    );

    expect(getByText("hello").hasAttribute("hidden")).toBeFalsy();
    fireEvent.click(getByText(/Title/i));
    expect(getByText("hello").hasAttribute("hidden")).toBeTruthy();
  });
});
