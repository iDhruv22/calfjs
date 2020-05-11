import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AccordionPanel from "./AccordionPanel";
import borderMixin from "../../mixins/border";
import { AccordionProvider } from "./AccordionContext";
import colors from "../../configs/colors";
import useAccordionState from "../../hooks/useAccordionState";

const AccordionStyled = styled.div`
  box-sizing: border-box;

  ${borderMixin}
  border-color: ${colors.darkSilver};
`;

AccordionStyled.displayName = "AccordionContainer";

function Accordion({
  children,
  id,
  onToggle: controlledOnToggle,
  expanded: controlledExpanded,
}) {
  if (process.env.NODE_ENV === "development" && controlledExpanded === null) {
    console.warn("<Accordion /> has been converted to uncontrolled component");
  }
  const uncontrolled = useAccordionState(
    Array(React.Children.count(children)).fill(true),
  );

  const isControlledRef = useRef(controlledExpanded != null);

  const expanded = isControlledRef.current
    ? controlledExpanded
    : uncontrolled.expanded;
  const onToggle = isControlledRef.current
    ? controlledOnToggle
    : uncontrolled.onToggle;

  return (
    <AccordionStyled>
      <AccordionProvider
        id={id}
        onToggle={onToggle}
        expanded={expanded}
        noOfChildrens={React.Children.count(children)}>
        {React.Children.map(children, (child, index) => {
          if (process.env.NODE_ENV === "development") {
            if (child.type.displayName !== "AccordionPanel") {
              console.warn(`
              <Accordion /> only accepts the <Accordion.Panel /> as a children.
              `);
            }
          }

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

Accordion.propTypes = {
  expanded: PropTypes.arrayOf(PropTypes.bool),
  onToggle: PropTypes.func,
};

Accordion.defaultProps = {
  expanded: null,
};

export default Accordion;
