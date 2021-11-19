import React, { useEffect, useState } from "react";
import { Backdrop } from "../../../library/Atoms/Backdrop";
import { SECONDS_TO_START } from "../../../../constants";
import { useToggle } from "../../../hooks/useToggle";

export const StartGameBackdrop = ({ onUnmount }) => {
  const [secondsToStart, setSecondsToStart] = useState(SECONDS_TO_START);
  const [startLoading, toggleStartLoading] = useToggle(true);

  useEffect(() => {
    let timeout;
    if (secondsToStart !== -1) {
      timeout = setTimeout(() => setSecondsToStart(prev => prev - 1), 1000);
    } else {
      toggleStartLoading();
      onUnmount();
    }

    return () => clearTimeout(timeout);
  }, [secondsToStart]);

  if (!startLoading) return null;
  return <Backdrop text={secondsToStart !== -1 && (secondsToStart === 0 ? "Go!" : secondsToStart)} />;
};
