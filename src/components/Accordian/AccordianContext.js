import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useState,
} from "react";
import useRandomId from "../../hooks/useRandomId";

const AccordianContext = createContext({
  focusRef: {},
});

function useAccordianContext() {
  const context = useContext(AccordianContext);
  if (context) {
    return context;
  }

  throw new Error(
    "useAccordianContext can only use under the accordian provider",
  );
}

function AccordianProvider(id, expanded, children) {
  const focusRef = useRef(null);
  const [selected, setSelected] = useState([null]);
  const uid = useRandomId(id);

  const context = useMemo(() => {
    return { focusRef, uid, selected, expanded };
  }, [expanded, selected, uid]);

  return (
    <AccordianContext.Provider value={context}>
      {children}
    </AccordianContext.Provider>
  );
}

export { useAccordianContext, AccordianProvider };
