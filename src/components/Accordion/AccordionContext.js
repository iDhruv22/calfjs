import React, {
  createContext,
  useContext,
  useRef,
  useMemo,
  useReducer,
} from "react";
import useRandomId from "../../hooks/useRandomId";

const AccordionContext = createContext({
  focusRef: {},
});

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (context) {
    return context;
  }

  throw new Error(
    "useAccordionContext can only use under the accordion provider",
  );
}

function useAccordionSelection(focusRef, noOfChildrens) {
  const initialState = [null];

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ArrowDown":
        if (focusRef.current >= noOfChildrens - 1) {
          return [0];
        } else {
          return [focusRef.current + 1];
        }
        break;
      case "ArrowUp":
        if (focusRef.current <= 0) {
          return [noOfChildrens - 1];
        } else {
          return [focusRef.current - 1];
        }
        break;
      case "Home":
        return [0];
        break;
      case "End":
        return [noOfChildrens - 1];
        break;
      default:
        return state;
        break;
    }
  };

  const [selected, onMove] = useReducer(reducer, initialState);

  return [selected, onMove];
}

function AccordionProvider({
  id,
  expanded,
  children,
  onToggle,
  noOfChildrens,
}) {
  const focusRef = useRef(null);
  const [selected, onMove] = useAccordionSelection(focusRef, noOfChildrens);
  const uid = useRandomId(id);

  const context = useMemo(() => {
    return { focusRef, uid, selected, expanded, onToggle, onMove };
  }, [focusRef, uid, selected, expanded, onToggle, onMove]);

  return (
    <AccordionContext.Provider value={context}>
      {children}
    </AccordionContext.Provider>
  );
}

export { useAccordionContext, AccordionProvider };
