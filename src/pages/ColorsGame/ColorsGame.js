import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Vibration } from "react-native";
import { colorsGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./ColorsGame.styles";
import Orientation from "react-native-orientation";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { Header } from "../../library/Molecules/Header";
import { Animation } from "../../library/Atoms/Animations";
import { RowLayout } from "../../library/Layouts/RowLayout";

export const ColorsGame = () => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

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

  const countPoints = useCallback(multiplier => {
    return ((timeLeft / config.GAME_TIME_MS) * multiplier - mistakesCount * 100 + 300).toFixed(0);
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    console.log(countPoints(100), timeLeft);
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);
    console.log(countPoints(1000), timeLeft);
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
    Orientation.lockToPortrait();
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
      <Header rounded>
        <Text style={stylesWithTheme.title}>Colors palEtte</Text>
        <View style={stylesWithTheme.animation}>
          <Animation name={"clock"} play={isGameStarted} />
        </View>
        <Text style={[stylesWithTheme.time, (timeLeft / 1000).toFixed(2) < 5 && { color: theme.colors.red }]}>
          {timeLeft < 0 ? (0).toFixed(2) : (timeLeft / 1000).toFixed(2)}
        </Text>
      </Header>
      <Text style={stylesWithTheme.mistakes}>Mistakes: {mistakesCount}</Text>
      <View style={stylesWithTheme.validColorContainer}>
        <View style={{ ...stylesWithTheme.validColor, backgroundColor: rgbToString(validColor) }} />
      </View>

      <View style={stylesWithTheme.gridContainer}>
        {randomColors.length > 0 &&
          range.map((_, rowIdx) => (
            <RowLayout key={rowIdx}>
              {range.map((_, colIdx) => {
                const colorIdx = colIdx + config.SQUARE_SIZE * rowIdx;
                const color = rgbToString(randomColors[colorIdx]);
                return (
                  <TouchableHighlight
                    key={colIdx}
                    style={stylesWithTheme.cell}
                    activeOpacity={0.7}
                    onPress={() => onCellPress(color)}
                  >
                    <View style={{ ...stylesWithTheme.innerCell, backgroundColor: color }} />
                  </TouchableHighlight>
                );
              })}
            </RowLayout>
          ))}
      </View>
    </PageLayout>
  );
};
