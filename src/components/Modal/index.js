import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./ModalProvider";
import useRandomId from "../../hooks/useRandomId";
import ModalWrapper, {
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./ModalWrapper";
import styled from "styled-components";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
`;

ModalContainer.displayName = "ModalContainer";

/** A Dialog box */
function Modal({ children, visible, onClose, wantClose, id }) {
  // get the unique ID
  const [uid] = useState(useRandomId(id));
  const portal = useRef(null);

  useEffect(() => {
    // create unique parent node for modal
    const modalId = `modal_${uid}`;
    const modalEl = document.createElement("div");
    modalEl.setAttribute("id", modalId);
    document.querySelector("body").appendChild(modalEl);
    portal.current = modalEl;
  }, [uid]);

  // if click outside the modal
  const _handleOnClick = (e) => {
    onClose(false);
  };

  const modal = (
    <ModalProvider
      visible={visible}
      onClose={onClose}
      wantClose={wantClose}
      uid={uid}>
      <ModalContainer
        className="sdf"
        hidden={!visible}
        onClick={_handleOnClick}>
        <ModalWrapper>{children}</ModalWrapper>
      </ModalContainer>
    </ModalProvider>
  );

  if (portal.current && visible) {
    return ReactDOM.createPortal(modal, portal.current);
  }

  return null;
}

Modal.propTypes = {
  /** Flag indicated the visibility of the modal */
  visible: PropTypes.bool.isRequired,
  /** The function will be called with "false" value so that the calling component can toggle the "visible" property */
  onClose: PropTypes.func.isRequired,
  /** Flag is use to display "close" icon */
  wantClose: PropTypes.bool,
  /** unique identifier for modal */
  id: PropTypes.any,
};

Modal.defaultProps = {
  visible: false,
  onClose: () => {},
  wantClose: true,
  id: undefined,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
