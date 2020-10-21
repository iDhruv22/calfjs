import React, { useContext, useMemo } from "react";

const ModalContext = React.createContext({});

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (context) {
    return context;
  }

  throw new Error("useModalContext can only use under the Modal provider");
};

function ModalProvider({ children, onClose, uid, wantClose }) {
  const modalId = `modal_${uid}`;

  const context = useMemo(() => {
    return { uid, modalId, onClose, wantClose };
  }, [uid, onClose, wantClose, modalId]);

  return (
    <ModalContext.Provider value={context}>{children}</ModalContext.Provider>
  );
}

export { ModalProvider, useModalContext };
