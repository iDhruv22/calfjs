import React, { useMemo, useCallback } from "react";
import styled from "styled-components";
import considerFor from "../../configs/device-size";
import { useModalContext } from "./ModalProvider";
import colors from "../../configs/colors";
import { useRef } from "react";
import { useEffect } from "react";

const ModalWrapperStyled = styled.div`
  position: relative;
  background-color: #fff;

  width: 100%;

  ${considerFor.laptop`
    top: 2rem;
    width: auto;
    max-width: 75%;
    left: 50vw;
    transform: translateX(-50%);
    max-height: 85vh;
  `}

  ${considerFor.laptopL`
    top: 2rem;
    width: auto;
    max-width: 75%;
    left: 50vw;
    transform: translateX(-50%);
    max-height: 85vh;
  `}

  ${considerFor.desktop`
    top: 2rem;
    width: auto;
    max-width: 75%;
    left: 50vw;
    transform: translateX(-50%);
    max-height: 85vh;
  `}

  ${considerFor.desktopL`
    top: 2rem;
    width: auto;
    max-width: 75%;
    left: 50vw;
    transform: translateX(-50%);
    max-height: 85vh;
  `}
`;

ModalWrapperStyled.displayName = "ModalWrapperStyled";

const CloseButtonStyled = styled.button`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;

  color: ${colors.silver};

  /* postion */
  position: absolute;
  top: 0;
  right: 0;

  /* font */
  font-weight: 900;
  font-size: xx-large;

  /* background */
  background: transparent;

  /* border */
  border-style: none;

  cursor: pointer;
`;

CloseButtonStyled.displayName = "Close";

const ModalHeader = styled.div`
  padding: 12px 16px;
`;
ModalHeader.displayName = "ModalHeader";

const ModalBody = styled.div`
  padding: 12px 16px;
`;
ModalBody.displayName = "ModalBody";

const ModalFooter = styled.div`
  padding: 12px 16px;
`;
ModalFooter.displayName = "ModalFooter";

function ModalWrapper({ children }) {
  const { modalId, onClose, wantClose } = useModalContext();

  // if modal body doesnt have any focus element in that case use dummy div to get focus on modal
  const dummyFocus = useRef(null);

  // get the current focus element before component mounts
  const lastFocusedElement = useRef(document.activeElement);

  const getId = useCallback(
    (displayName) => {
      if (displayName === "ModalHeader") {
        return `${modalId}_h`;
      } else if (displayName === "ModalBody") {
        return `${modalId}_b`;
      } else if (displayName === "ModalFooter") {
        return `${modalId}_f`;
      }
    },
    [modalId],
  );

  const { header, body, footer } = useMemo(
    () =>
      React.Children.toArray(children).reduce(
        (prev, curr) => {
          let displayName = curr.type.displayName;
          if (displayName === "ModalHeader") {
            prev.header = React.cloneElement(curr, {
              ...curr.props,
              id: getId(displayName),
              key: "modal-header",
            });
          }

          if (displayName === "ModalBody") {
            prev.body = React.cloneElement(curr, {
              ...curr.props,
              id: getId(displayName),
              key: "modal-body",
            });
          }

          if (displayName === "ModalFooter") {
            prev.footer = React.cloneElement(curr, {
              ...curr.props,
              id: getId(displayName),
              key: "modal-footer",
            });
          }

          return prev;
        },
        {
          header: null,
          body: null,
          footer: null,
        },
      ),
    [children, getId],
  );

  useEffect(() => {
    let _lastFocusedElement = lastFocusedElement.current;

    // find the element in modal which has default focus(like input with autoFocus)
    let focusEl = document.getElementById(modalId).querySelector(":focus");

    if (focusEl === null) {
      // if no element has focus then focus dummy div in the modal
      dummyFocus.current.focus();
    }

    return () => {
      // focus the element(generally button) from where modal was opened
      if (_lastFocusedElement !== null) {
        _lastFocusedElement.focus();
      }
    };
  }, [modalId]);

  // call "onClose" on "ESC" key press
  const _handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose(false);
    }
  };

  // call "onClose" when "cross" icon clicked
  const _handleClose = (e) => {
    onClose(false);
  };

  return (
    <ModalWrapperStyled
      role="dialog"
      aria-modal="true"
      aria-labelledby={(header && header.props && header.props.id) || null}
      aria-describedby={(body && body.props && body.props.id) || null}
      tabIndex="-1"
      onKeyDown={_handleKeyDown}
      onClick={(e) => e.stopPropagation()}>
      <div tabIndex="0" ref={dummyFocus}></div>
      <CloseButtonStyled onClick={_handleClose} hidden={!wantClose}>
        <span aria-hidden="true">x</span>
      </CloseButtonStyled>
      {header}
      {body}
      {footer}
    </ModalWrapperStyled>
  );
}

export default ModalWrapper;
export { ModalHeader, ModalBody, ModalFooter };
