import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, TouchableHighlight, Vibration } from "react-native";
import { colorsGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./ColorsGame.styles";

export const ColorsGame = () => {
  const config = colorsGame[0]; // Idx 0 defines level 1 of 3
  const totalItemsCount = config.SQUARE_SIZE * config.SQUARE_SIZE;

  const [validColor, setValidColor] = useState([0, 0, 0]);
  const [randomColors, setRandomColors] = useState([]);
  const [mistakesCount, setMistakesCount] = useState(0);
  const [colorsLeft, setColorsLeft] = useState(config.COLORS_COUNT);

  const generageGame = useCallback(() => {
    const vColor = [Math.random() * 255, Math.random() * 255, Math.random() * 255];
    setValidColor(vColor);

    const colors = [];

    for (let i = 0; i < totalItemsCount - 1; i++) {
      const max = config.COLOR_BIAS;
      const min = -config.COLOR_BIAS;
      colors.push([
        vColor[0] + Math.random() * (max - min) + min,
        vColor[1] + Math.random() * (max - min) + min,
        vColor[2] + Math.random() * (max - min) + min,
      ]);
    }
    colors.push(vColor);

    // Shuffle them all!
    colors.sort(() => Math.random() - 0.5);
    colors.sort(() => Math.random() - 0.5);
    colors.sort(() => Math.random() - 0.5);
    setRandomColors(colors);
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);

    // ------------------------------------------------------- TODO: Do the post-game WIN message
  });

  const rgbToString = useCallback(rgb => `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);

  const [isGameStarted, timeLeft, onStartGame, onSetIsWinner] = useGameTimer(
    handleWin,
    handleLoose,
    config.GAME_TIME_MS,
  );

  // Generate the game on start
  useEffect(() => {
    generageGame();
  }, []);

  // Loose if more than 3 mistakes
  useEffect(() => {
    if (mistakesCount >= 3) {
      onSetIsWinner(false);
    }
  }, [mistakesCount]);

  const onCellPress = useCallback(color => {
    // Start the game if needed
    if (!isGameStarted) {
      onStartGame();
    }

    // Check if the pressed color is valid
    if (rgbToString(validColor) === color) {
      if (colorsLeft - 1 === 0) {
        // Win if pressed all the colors
        onSetIsWinner(true);
      } else {
        generageGame();
      }
      setColorsLeft(colorsLeft - 1);
    } else {
      Vibration.vibrate(100);
      setMistakesCount(mistakesCount + 1);
    }
  });

  const range = Array(config.SQUARE_SIZE).fill(0);

  return (
    <PageLayout>
      <Text style={styles.timerText}>{timeLeft < 0 ? (0).toFixed(2) : (timeLeft / 1000).toFixed(2)}</Text>
      <View style={styles.container}>
        <View style={{ ...styles.validColor, backgroundColor: rgbToString(validColor) }}></View>
        <Text style={styles.colorsLeft}>Colors left: {colorsLeft}</Text>
        <Text style={styles.mistakesText}>Mistakes: {mistakesCount}</Text>
        <View style={styles.gridContainer}>
          {randomColors.length > 0 &&
            range.map((_, rowIdx) => (
              <View key={rowIdx} style={styles.row}>
                {range.map((_, colIdx) => {
                  const colorIdx = colIdx + config.SQUARE_SIZE * rowIdx;
                  const color = rgbToString(randomColors[colorIdx]);
                  return (
                    <TouchableHighlight
                      key={colIdx}
                      style={styles.cell}
                      activeOpacity={0.7}
                      onPress={() => onCellPress(color)}>
                      <View style={{ ...styles.innerCell, backgroundColor: color }} />
                    </TouchableHighlight>
                  );
                })}
              </View>
            ))}
        </View>
      </View>
    </PageLayout>
  );
};
