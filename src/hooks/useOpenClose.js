import { useCallback, useState } from "react";

export const useOpenClose = defaultValue => {
  const [open, setOpen] = useState(defaultValue);

  const onOpen = useCallback(() => setOpen(true), [setOpen]);
  const onClose = useCallback(() => setOpen(false), [setOpen]);

  return [open, onOpen, onClose];
};
