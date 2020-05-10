import React from "react";
import styled from "styled-components";
import { useAccordianContext } from "./AccordianContext";

const _AccordianPanelHeader = styled.div``;
_AccordianPanelHeader.displayName = "AccordianPanelHeader";

const _AccordianPanelBody = styled.div``;
_AccordianPanelHeader.displayName = "AccordianPanelBody";

const AccordianPanel = React.forwardRef((props, ref) => {
  const { index, title, children } = props;

  const { expanded, id } = useAccordianContext();
  const isExpanded = expanded[index];

  // accordian_panel_header => a_p_h_${id}_id_${index}
  // accordian_panel_body => a_p_b_${id}_id_${index}

  const headerId = `a_p_h_${id}_id_${index}`;
  const bodyId = `a_p_b_${id}_id_${index}`;

  return (
    <div ref={ref}>
      <_AccordianPanelHeader
        role="button"
        aria-expanded={isExpanded}
        aria-controls={bodyId}
        id={headerId}>
        {title}
        <span aria-hidden={true}>{expanded ? "▲" : "▼"}</span>
      </_AccordianPanelHeader>
      <_AccordianPanelBody
        id={bodyId}
        role="region"
        aria-labelledby={headerId}
        hidden={!expanded}>
        {children}
      </_AccordianPanelBody>
    </div>
  );
});

AccordianPanel.displayName = "AccordianPanel";

export default AccordianPanel;
