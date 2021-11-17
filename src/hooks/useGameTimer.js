import { useState, useEffect, useRef } from "react";

export function useGameTimer(winCallback, looseCallback, gameTimeMs) {
  const interval = useRef();
  const [isGameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(gameTimeMs);
  const [isWinner, setIsWinner] = useState(null);

  useEffect(() => {
    if (isGameStarted && timeLeft === gameTimeMs) {
      const startTime = new Date().valueOf();

      // Launch a countdown timer
      interval.current = setInterval(() => {
        const currentTime = new Date().valueOf();
        const newTimeLeft = startTime + gameTimeMs - currentTime;
        setTimeLeft(newTimeLeft);
      }, 75);
    }

    return () => clearInterval(interval.current);
  }, [isGameStarted, interval]);

  // Check if time is up
  useEffect(() => {
    if (timeLeft <= 0) {
      clearInterval(interval.current);
      looseCallback();
    }
  }, [timeLeft]);

  // Check if win state was changed from above and stop the timer, call win/loose callback
  useEffect(() => {
    if (isWinner === true) {
      clearInterval(interval.current);
      winCallback();
    } else if (isWinner === false) {
      clearInterval(interval.current);
      looseCallback();
    }
  }, [isWinner]);

  return [isGameStarted, timeLeft, () => setGameStarted(true), setIsWinner];
}
