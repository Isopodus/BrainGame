import { useState, useEffect, useRef } from "react";

export function useGameTimer(winCallback, looseCallback, gameTimeMs) {
  const interval = useRef();

  const [isGameStarted, setGameStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(gameTimeMs);
  const [timeReduce, setTimeReduce] = useState(0);
  const [isWinner, setIsWinner] = useState(null);

  useEffect(() => {
    if (isGameStarted && timeLeft === gameTimeMs) {
      const startTime = new Date().valueOf();

      // Launch a countdown timer
      interval.current = setInterval(() => {
        const currentTime = new Date().valueOf();
        const newTimeLeft = startTime + gameTimeMs - currentTime;
        setTimeLeft(newTimeLeft);
      }, 275);
    }

    return () => clearInterval(interval.current);
  }, [isGameStarted, interval]);

  // Check if time is up
  useEffect(() => {
    if (timeLeft - timeReduce <= 0 && isWinner === null) {
      setIsWinner(false);
    }
  }, [timeLeft, timeReduce, isWinner]);

  // Check if win state was changed from above and stop the timer, call win/loose callback
  useEffect(() => {
    if (isWinner === true) {
      clearInterval(interval.current);
      winCallback();
      setGameStarted(false);
    } else if (isWinner === false) {
      clearInterval(interval.current);
      looseCallback();
      setGameStarted(false);
    }
  }, [isWinner]);

  return [isGameStarted, timeLeft - timeReduce, () => setGameStarted(true), setIsWinner, isWinner];
}
