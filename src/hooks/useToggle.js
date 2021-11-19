import { useCallback, useState } from "react";

export const useToggle = defaultValue => {
  const [state, setState] = useState(defaultValue);

  const onToggle = useCallback(() => setState(prev => !prev), []);

  return [state, onToggle];
};
