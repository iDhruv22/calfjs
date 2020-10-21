import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useAccordionContext } from "./AccordionContext";
import colors from "../../configs/colors";

const AccordionPanelHeaderStyled = styled.div`
  position: relative;
  padding: 12px 16px;
  background-color: ${colors.silverLight};
  cursor: pointer;

  &[aria-expanded="true"] {
    font-weight: 500;
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
  right: 16px;
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
      case "ArrowUp":
      case "Home":
      case "End":
        e.preventDefault();
        onMove({
          type: e.key,
        });
        break;
      default:
        break;
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

AccordionPanel.propTypes = {
  title: PropTypes.string,
};

AccordionPanel.defaultProps = {
  title: "",
};

export default AccordionPanel;
