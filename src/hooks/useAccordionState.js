import { useState } from "react";

function useAccordionState(initialState) {
  const [expanded, setExpanded] = useState(initialState);

  const onToggle = (index) => {
    let newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return {
    expanded,
    onToggle,
  };
}

export default useAccordionState;
