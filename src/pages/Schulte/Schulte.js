import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Vibration } from "react-native";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./Schulte.styles";

export const Schulte = () => {
  const SQUARE_SIZE = 5;
  const GAME_TIME_MS = 15000;

  const [isGameStarted, setGameStarted] = useState(false);
  const [sequence, setSequence] = useState([]);
  const [validSequence, setValidSequence] = useState([]);
  const [currentNumberIdx, setCurrentNumberIdx] = useState(0);
  const [startTime, setStartTime] = useState();
  const [timeLeft, setTimeLeft] = useState(GAME_TIME_MS);
  const [mistakesCount, setMistakesCount] = useState(0);
  const interval = useRef();

  useEffect(() => {
    generageGame();
  }, []);

  const generageGame = useCallback(() => {
    // Generate a sequence of numbers
    const nums = [...Array(SQUARE_SIZE * SQUARE_SIZE).keys()].map(value => value + 1);
    setValidSequence([...nums]);

    // Shuffle them all!
    nums.sort(() => Math.random() - 0.5);
    setSequence(nums);
  });

  useEffect(() => {
    if (isGameStarted && timeLeft === GAME_TIME_MS) {
      // Launch a countdown timer
      interval.current = setInterval(() => {
        const currentTime = new Date().valueOf();
        setTimeLeft(startTime + GAME_TIME_MS - currentTime);
      }, 100);
    }

    return () => clearInterval(interval.current);
  }, [isGameStarted, interval]);

  useEffect(() => {
    if (timeLeft <= 0) {
      Vibration.vibrate(1000);
      clearInterval(interval.current);

      // ------------------------------------------------------- TODO: Do the post-game LOOSE message
    }
  }, [timeLeft]);

  useEffect(() => {
    if (mistakesCount >= 3) {
      setTimeLeft(0);
    }
  }, [mistakesCount]);

  useEffect(() => {
    if (currentNumberIdx >= SQUARE_SIZE * SQUARE_SIZE) {
      clearInterval(interval.current);
      Vibration.vibrate([0, 50, 50, 50, 50, 200]);

      // ------------------------------------------------------- TODO: Do the post-game WIN message
    }
  }, [currentNumberIdx]);

  const onCellPress = number => {
    // Start the game if needed
    if (!isGameStarted) {
      setStartTime(new Date().valueOf());
      setGameStarted(true);
    }

    // Check if the pressed number is valid
    if (number === validSequence[currentNumberIdx]) {
      setCurrentNumberIdx(currentNumberIdx + 1);
    } else {
      Vibration.vibrate(100);
      setMistakesCount(mistakesCount + 1);
    }
  };

  const range = Array(SQUARE_SIZE).fill(0);

  return (
    <PageLayout>
      <Text style={styles.headerText}>Schulte table</Text>
      <Text style={styles.explanationText}>
        Press the buttons in the valid order until the time is up. You are allowed to have 3 mistakes before you loose. The timer
        starts as you press on any number.
      </Text>
      <Text style={styles.timerText}>{timeLeft < 0 ? (0).toFixed(2) : (timeLeft / 1000).toFixed(2)}</Text>
      <Text style={styles.mistakesText}>Mistakes: {mistakesCount}</Text>
      <View style={styles.container}>
        {range.map((_, rowIdx) => (
          <View key={rowIdx} style={styles.row}>
            {range.map((_, colIdx) => {
              const numIdx = colIdx + SQUARE_SIZE * rowIdx;
              const isValid = validSequence[currentNumberIdx] > sequence[numIdx] || currentNumberIdx >= SQUARE_SIZE * SQUARE_SIZE;
              return (
                <TouchableHighlight key={colIdx} activeOpacity={0.7} onPress={() => onCellPress(sequence[numIdx])}>
                  <View style={{ ...styles.cell, ...(isValid ? styles.validCell : {}) }}>
                    <Text style={styles.cellText}>{sequence[numIdx]}</Text>
                  </View>
                </TouchableHighlight>
              );
            })}
          </View>
        ))}
      </View>
    </PageLayout>
  );
};
