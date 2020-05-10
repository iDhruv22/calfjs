import React from "react";
import styled from "styled-components";
import AccordianPanel from "./AccordianPanel";
import borderMixin from "../../mixins/border";
import { AccordianProvider } from "./AccordianContext";

const _Accordian = styled.div`
  ${borderMixin}
`;

_Accordian.displayName = "AccordianContainer";

function Accordian({ children, id }) {
  return (
    <_Accordian>
      <AccordianProvider id={id}>
        {React.Children.map(children, (child, index) =>
          React.createElement(child, {
            ...child.props,
            index,
          }),
        )}
      </AccordianProvider>
    </_Accordian>
  );
}

Accordian.displayName = "Accordian";
Accordian.Panel = AccordianPanel;

export default Accordian;
