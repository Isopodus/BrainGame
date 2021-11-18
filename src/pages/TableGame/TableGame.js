import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Vibration } from "react-native";
import { tableGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./TableGame.styles";

export const TableGame = () => {
  const config = tableGame[1]; // Idx 0 defines level 1 of 3
  const totalItemsCount = config.SQUARE_SIZE * config.SQUARE_SIZE;

  const [sequence, setSequence] = useState([]);
  const [validSequence, setValidSequence] = useState([]);
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [mistakesCount, setMistakesCount] = useState(0);

  const generageGame = useCallback(generateLetters => {
    let items;
    if (generateLetters) {
      // Generate a sequence of letters
      items = Array(totalItemsCount)
        .fill(0)
        .map((_, i) => String.fromCharCode("A".charCodeAt(0) + i));
    } else {
      // Generate a sequence of numbers
      items = [...Array(totalItemsCount).keys()].map(value => value + 1);
    }

    // Save the valid sequence
    setValidSequence([...items]);

    // Shuffle them all!
    items.sort(() => Math.random() - 0.5);
    setSequence(items);
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);

    // ------------------------------------------------------- TODO: Do the post-game WIN message
  });

  const [isGameStarted, timeLeft, onStartGame, onSetIsWinner] = useGameTimer(handleWin, handleLoose, config.GAME_TIME_MS);

  // Generate the game on start
  useEffect(() => {
    generageGame(config.LETTERS_MODE);
  }, []);

  // Win if all the tiles are presed
  useEffect(() => {
    if (currentItemIdx >= totalItemsCount) {
      onSetIsWinner(true);
    }
  }, [currentItemIdx]);

  // Loose if more than 3 mistakes
  useEffect(() => {
    if (mistakesCount >= 3) {
      onSetIsWinner(false);
    }
  }, [mistakesCount]);

  const onCellPress = useCallback(number => {
    // Start the game if needed
    if (!isGameStarted) {
      onStartGame();
    }

    // Check if the pressed number is valid
    if (number === validSequence[currentItemIdx]) {
      setCurrentItemIdx(currentItemIdx + 1);
    } else {
      Vibration.vibrate(100);
      setMistakesCount(mistakesCount + 1);
    }
  });

  const range = Array(config.SQUARE_SIZE).fill(0);

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
              const numIdx = colIdx + config.SQUARE_SIZE * rowIdx;
              const isValid = validSequence[currentItemIdx] > sequence[numIdx] || currentItemIdx >= totalItemsCount;
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
