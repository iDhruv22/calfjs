import { useState } from "react";

function useTabState(initialState = 0) {
  const [expanded, setExpanded] = useState(initialState);

  const onChange = (index) => {
    setExpanded(index);
  };

  return {
    expanded,
    onChange,
  };
}

export default useTabState;
