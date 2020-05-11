import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import borderMixin from "../../mixins/border";
import alertMixin, { color } from "../../mixins/alert";
import fontMixin from "../../mixins/font";

const AlertStyled = styled.div`
  box-sizing: border-box;

  /* border */
  ${borderMixin}

  /* alert mixin */
  ${alertMixin}

  /* font mixin */
  ${fontMixin}
  font-weight: 500;

  /* padding */
  padding: 10px;

  /* postion */
  position: relative;
`;

AlertStyled.displayName = "AlertContainer";

const CloseButtonStyled = styled.button`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;

  /* alert mixin for color */
  ${color}

  /* postion */
  position: absolute;
  top: 0;
  right: 0;

  /* font */
  font-weight: 900;

  /* background */
  background: transparent;

  /* border */
  border-style: none;

  height: 100%;

  cursor: pointer;
`;

CloseButtonStyled.displayName = "AlertCloseButton";

/**
 *
 * @param {wantClose, onClose}
 * wantClose - if set to true close will be present
 * onClose - function will be called on close of the alert
 */
function Alert(props) {
  const [isOpen, setClose] = useState(true);

  /**
   * handle for close alert
   */
  const _handleClose = () => {
    setClose(false);
    props.onClose();
  };

  if (!isOpen) return null;

  return (
    <AlertStyled variant={props.variant} role="alert">
      {props.children}
      {props.wantClose ? (
        <CloseButtonStyled
          tabIndex="0"
          variant={props.variant}
          onClick={_handleClose}>
          <span aria-hidden="true">x</span>
        </CloseButtonStyled>
      ) : null}
    </AlertStyled>
  );
}

Alert.propTypes = {
  wantClose: PropTypes.bool,
  onClose: PropTypes.func,
  variant: PropTypes.string,
};

Alert.defaultProps = {
  wantClose: true,
  onClose: () => {},
  variant: "info",
};

export default Alert;
