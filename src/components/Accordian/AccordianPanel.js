import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useAccordianContext } from "./AccordianContext";

const AccordianPanelHeaderStyled = styled.div``;
AccordianPanelHeaderStyled.displayName = "AccordianPanelHeader";

const AccordianPanelBodyStyled = styled.div``;
AccordianPanelBodyStyled.displayName = "AccordianPanelBody";

const AccordianPanel = React.forwardRef((props, ref) => {
  const { index, title, children } = props;

  const {
    focusRef,
    uid,
    selected,
    expanded,
    onToggle,
    onMove,
  } = useAccordianContext();

  const isExpanded = expanded[index];

  // accordian_panel_header => a_p_h_${id}_id_${index}
  // accordian_panel_body => a_p_b_${id}_id_${index}

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
      <AccordianPanelHeaderStyled
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
        <span aria-hidden={true}>{isExpanded ? "▲" : "▼"}</span>
      </AccordianPanelHeaderStyled>
      <AccordianPanelBodyStyled
        id={bodyId}
        role="region"
        aria-labelledby={headerId}
        hidden={!isExpanded}>
        {children}
      </AccordianPanelBodyStyled>
    </div>
  );
});

AccordianPanel.displayName = "AccordianPanel";

export default AccordianPanel;
