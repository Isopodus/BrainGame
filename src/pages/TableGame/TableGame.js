import React, { useCallback, useEffect, useState } from "react";
import { View, Text, TouchableHighlight, Vibration } from "react-native";
import { tableGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./TableGame.styles";
import Orientation from "react-native-orientation";
import { Animation } from "../../library/Atoms/Animations";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { Header } from "../../library/Molecules/Header";
import { useSelector } from "react-redux";
import { api } from "../../requests/api";

export const TableGame = ({ navigation, route }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const token = useSelector(state => state.token);

  const config = tableGame[route.params.difficulty]; // Idx 0 defines level 1 of 3
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

  const countPoints = useCallback(multiplier => {
    return (timeLeft / config.GAME_TIME_MS) * multiplier - mistakesCount * 100 + 300;
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    api.closeSession({ score: countPoints(100) }, token).then(data => {
      navigation.navigate("Home");
    });
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);
    api.updateSession({ score: countPoints(1000) }, token).then(data => {
      navigation.navigate("Home", { newSession: data.data });
    });
    // ------------------------------------------------------- TODO: Do the post-game WIN message
  });

  const [isGameStarted, timeLeft, onStartGame, onSetIsWinner] = useGameTimer(
    handleWin,
    handleLoose,
    config.GAME_TIME_MS,
  );

  // Generate the game on start
  useEffect(() => {
    Orientation.lockToPortrait();
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
      <Header rounded>
        <Text style={stylesWithTheme.title}>Schulte table</Text>
        <View style={stylesWithTheme.animation}>
          <Animation name={"clock"} play={isGameStarted} />
        </View>
        <Text style={[stylesWithTheme.time, (timeLeft / 1000).toFixed(2) < 5 && { color: theme.colors.red }]}>
          {timeLeft < 0 ? (0).toFixed(2) : (timeLeft / 1000).toFixed(2)}
        </Text>
      </Header>
      <Text style={[stylesWithTheme.mistakes, mistakesCount > 0 && { color: theme.colors.red }]}>
        Mistakes: {mistakesCount}
      </Text>
      <View style={stylesWithTheme.gridContainer}>
        {range.map((_, rowIdx) => (
          <View key={rowIdx} style={stylesWithTheme.row}>
            {range.map((_, colIdx) => {
              const numIdx = colIdx + config.SQUARE_SIZE * rowIdx;
              const isValid = validSequence[currentItemIdx] > sequence[numIdx] || currentItemIdx >= totalItemsCount;
              return (
                <TouchableHighlight
                  key={colIdx}
                  style={[stylesWithTheme.cell, isValid && { backgroundColor: theme.colors.pink }]}
                  activeOpacity={0.7}
                  onPress={() => onCellPress(sequence[numIdx])}
                >
                  <Text style={stylesWithTheme.cellText}>{sequence[numIdx]}</Text>
                </TouchableHighlight>
              );
            })}
          </View>
        ))}
      </View>
    </PageLayout>
  );
};
