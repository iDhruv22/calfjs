import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useReducer,
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

function useAccordianSelection(focusRef, noOfChildrens) {
  const initialState = [null];

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ArrowDown":
        if (focusRef.current >= noOfChildrens - 1) {
          return [0];
        } else {
          return [focusRef.current + 1];
        }
      case "ArrowUp":
        if (focusRef.current <= 0) {
          return [noOfChildrens - 1];
        } else {
          return [focusRef.current - 1];
        }
      case "Home":
        return [0];
      case "End":
        return [noOfChildrens - 1];
      default:
        return state;
    }
  };

  const [selected, onMove] = useReducer(reducer, initialState);

  return [selected, onMove];
}

function AccordianProvider({
  id,
  expanded,
  children,
  onToggle,
  noOfChildrens,
}) {
  const focusRef = useRef(null);
  const [selected, onMove] = useAccordianSelection(focusRef, noOfChildrens);
  const uid = useRandomId(id);

  const context = useMemo(() => {
    return { focusRef, uid, selected, expanded, onToggle, onMove };
  }, [focusRef, uid, selected, expanded, onToggle, onMove]);

  return (
    <AccordianContext.Provider value={context}>
      {children}
    </AccordianContext.Provider>
  );
}

export { useAccordianContext, AccordianProvider };
