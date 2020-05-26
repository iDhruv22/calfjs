import { useState } from "react";

const useModalState = (initalState = false) => {
  const [visible, hide] = useState(initalState);

  const close = () => {
    hide(false);
  };

  const open = () => {
    hide(true);
  };

  return [visible, open, close];
};
export default useModalState;
