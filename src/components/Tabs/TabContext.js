import React, { useReducer, useRef, useMemo, useContext } from "react";

const TabContext = React.createContext({});

function useTabContext() {
  let context = useContext(TabContext);

  if (context) {
    return context;
  }

  throw new Error("useTabContext can only use under the Tab provider");
}

function useTabSelection(noOfPanels, focusRef) {
  const initialState = null;

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ArrowLeft":
        if (focusRef.current <= 0) {
          return noOfPanels - 1;
        }
        return focusRef.current - 1;
      case "ArrowRight":
        if (focusRef.current >= noOfPanels - 1) {
          return 0;
        }
        return focusRef.current + 1;
      case "Home":
        return 0;
      case "End":
        return noOfPanels - 1;
      default:
        return focusRef.current;
    }
  };

  const [selected, onMove] = useReducer(reducer, initialState);

  return [selected, onMove];
}

function TabProvider({
  noOfPanels,
  onTabChange,
  children,
  expanded,
  autoSwitch,
}) {
  const focusRef = useRef(null);
  const [selected, onMove] = useTabSelection(noOfPanels, focusRef);

  const context = useMemo(() => {
    return { selected, onMove, focusRef, onTabChange, expanded, autoSwitch };
  }, [selected, onMove, focusRef, onTabChange, expanded, autoSwitch]);

  return <TabContext.Provider value={context}>{children}</TabContext.Provider>;
}

export { useTabContext, TabProvider };
