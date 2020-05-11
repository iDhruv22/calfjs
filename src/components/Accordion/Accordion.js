import React from "react";
import styled from "styled-components";
import AccordionPanel from "./AccordionPanel";
import borderMixin from "../../mixins/border";
import { AccordionProvider } from "./AccordionContext";
import colors from "../../configs/colors";

const AccordionStyled = styled.div`
  ${borderMixin}
  border-color: ${colors.darkSilver};
`;

AccordionStyled.displayName = "AccordionContainer";

function Accordion({ children, id, onToggle, expanded }) {
  return (
    <AccordionStyled>
      <AccordionProvider
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
      </AccordionProvider>
    </AccordionStyled>
  );
}

Accordion.displayName = "Accordion";
Accordion.Panel = AccordionPanel;

export default Accordion;
