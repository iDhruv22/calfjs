import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAccordionContext } from "./AccordionContext";
import colors from "../../configs/colors";

const AccordionPanelHeaderStyled = styled.div`
  position: relative;
  padding: 12px 16px;
  background-color: ${colors.silverLight};
  cursor: pointer;

  :focus {
    outline: none;
    box-shadow: 0 0 2px 1px ${colors.darkSilver};
  }
`;
AccordionPanelHeaderStyled.displayName = "AccordionPanelHeader";

const AccordionPanelBodyStyled = styled.div`
  padding: 12px 16px;
`;
AccordionPanelBodyStyled.displayName = "AccordionPanelBody";

const Arrow = styled.span`
  display: flex;
  font-weight: 900;
  position: absolute;
  top: 0;
  right: 0;
  margin-left: 5px;
  margin-right: 5px;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const AccordionPanel = React.forwardRef((props, ref) => {
  const { index, title, children } = props;

  const {
    focusRef,
    uid,
    selected,
    expanded,
    onToggle,
    onMove,
  } = useAccordionContext();

  const isExpanded = expanded[index];

  // accordion_panel_header => a_p_h_${id}_id_${index}
  // accordion_panel_body => a_p_b_${id}_id_${index}

  const headerId = `a_p_h_${uid}_id_${index}`;
  const bodyId = `a_p_b_${uid}_id_${index}`;

  const headerRef = useRef(null);

  useEffect(() => {
    if (index === selected[0] && headerRef.current) {
      headerRef.current.focus();
    }
  }, [index, selected]);

  const _handleOnFocus = () => {
    focusRef.current = index;
  };

  const _handleOnBlur = () => {
    focusRef.current = null;
  };

  const _handleOnClick = () => {
    onToggle && onToggle(index);
  };

  const _handleOnKeyDown = (e) => {
    switch (e.key) {
      case " ":
      case "Enter":
        e.preventDefault();
        onToggle && onToggle(index);
        break;
      case "ArrowDown":
        e.preventDefault();
        onMove("ArrowDown");
        break;
      case "ArrowUp":
        e.preventDefault();
        onMove("ArrowUp");
        break;
      case "Home":
        e.preventDefault();
        onMove("Home");
        break;
      case "End":
        e.preventDefault();
        onMove("End");
        break;
      default:
    }
  };

  return (
    <div ref={ref}>
      <AccordionPanelHeaderStyled
        ref={headerRef}
        id={headerId}
        role="button"
        aria-expanded={isExpanded}
        aria-controls={bodyId}
        tabIndex="0"
        onKeyDown={_handleOnKeyDown}
        onClick={_handleOnClick}
        onBlur={_handleOnBlur}
        onFocus={_handleOnFocus}>
        {title}
        <Arrow aria-hidden={true}>{isExpanded ? "▲" : "▼"}</Arrow>
      </AccordionPanelHeaderStyled>
      <AccordionPanelBodyStyled
        id={bodyId}
        role="region"
        aria-labelledby={headerId}
        hidden={!isExpanded}>
        {children}
      </AccordionPanelBodyStyled>
    </div>
  );
});

AccordionPanel.displayName = "AccordionPanel";

export default AccordionPanel;
