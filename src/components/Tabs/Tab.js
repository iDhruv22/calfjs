import React, { useRef, useEffect } from "react";
import { useTabContext } from "./TabContext";
import styled from "styled-components";
import colors from "../../configs/colors";

const TabStyled = styled.li`
  position: relative;
  border: 1px solid ${colors.gray80};
  border-bottom-style: none;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  padding: 12px 16px;
  margin-right: 2px;

  cursor: pointer;

  &[aria-selected="true"] {
    border-bottom-style: none;
  }

  &[aria-selected="true"]::after {
    position: absolute;
    bottom: -3px;
    right: 0;
    left: 0;
    background-color: white;
    content: "";
    height: 3px;
  }
`;

TabStyled.displayName = "TabContainer";

function Tab({ children, index, uid }) {
  const { selected, onMove, focusRef, onTabChange, expanded } = useTabContext();
  const tabRef = useRef(null);

  useEffect(() => {
    if (selected === index && tabRef.current) {
      tabRef.current.focus();
    }
  }, [selected, tabRef, index]);

  const isSelected = expanded === index;

  const _handleOnFocus = () => {
    focusRef.current = index;
  };

  const _handleOnClick = () => {
    onTabChange && onTabChange(index);
  };

  const _handleOnBlur = () => {
    focusRef.current = null;
  };

  const _handleOnKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        onTabChange && onTabChange(index);
        break;
      case "ArrowRight":
      case "ArrowLeft":
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
    <TabStyled
      ref={tabRef}
      role="tab"
      key={index}
      id={`t_t_${uid}_id`}
      aria-controls={`t_p_${uid}_id`}
      onFocus={_handleOnFocus}
      onBlur={_handleOnBlur}
      onKeyDown={_handleOnKeyDown}
      onClick={_handleOnClick}
      selected={isSelected}
      aria-selected={isSelected}
      tabIndex={isSelected ? "0" : "-1"}>
      {children}
    </TabStyled>
  );
}

export default Tab;
