import React from "react";
import styled from "styled-components";
import AccordianPanel from "./AccordianPanel";
import borderMixin from "../../mixins/border";
import { AccordianProvider } from "./AccordianContext";

const AccordianStyled = styled.div`
  ${borderMixin}
`;

AccordianStyled.displayName = "AccordianContainer";

function Accordian({ children, id, onToggle, expanded }) {
  return (
    <AccordianStyled>
      <AccordianProvider
        id={id}
        onToggle={onToggle}
        expanded={expanded}
        noOfChildrens={React.Children.count(children)}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {
            ...child.props,
            index,
          });
        })}
      </AccordianProvider>
    </AccordianStyled>
  );
}

Accordian.displayName = "Accordian";
Accordian.Panel = AccordianPanel;

export default Accordian;
