import nanoid from "nanoid";
import { useMemo } from "react";

function useRandomId(id) {
  return useMemo(() => {
    if (id === undefined) return nanoid(5);
    return id;
  }, [id]);
}

export default useRandomId;
