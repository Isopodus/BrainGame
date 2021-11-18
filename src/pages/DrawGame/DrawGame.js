import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, Vibration, Button, TouchableOpacity } from "react-native";
import { drawGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./DrawGame.styles";
import { colors } from "../../ui/colors";

import SignatureCapture from "react-native-signature-capture";
import Orientation from "react-native-orientation";

export const DrawGame = () => {
  const config = drawGame[0]; // Idx 0 defines level 1 of 3

  const [imagesTouched, setImagesTouched] = useState(0);
  const [checkDoubleTouch, setCheckDoubleTouch] = useState(false);
  const [outputImages, setOutputImages] = useState([null, null]);

  const image1ref = useRef();
  const image2ref = useRef();

  const countPoints = useCallback((multiplier, imagesDistance) => {
    return ((timeLeft / config.GAME_TIME_MS) * multiplier - imagesDistance * 300 + 300).toFixed(0);
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    console.log(countPoints(100, 0.5), timeLeft);
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);
    console.log(countPoints(1000, 0), timeLeft);
    // ------------------------------------------------------- TODO: Do the post-game WIN message
  });

  const [isGameStarted, timeLeft, onStartGame, onSetIsWinner, reduceTimeLeft] = useGameTimer(
    handleWin,
    handleLoose,
    config.GAME_TIME_MS,
  );

  // Set isWin to true and save the images for sending
  const handlePressDone = useCallback(() => {
    if (isGameStarted) {
      onSetIsWinner(true);
      image1ref.current.saveImage();
      image2ref.current.saveImage();
    }
  });

  const onSaveImage = useCallback((imageIdx, base64) => {
    const images = [...outputImages];
    images[imageIdx] = base64;
    setOutputImages(images);
    console.log(images);
  });

  const incImagesTouched = useCallback(() => {
    setImagesTouched(imagesTouched + 1);
  });

  const decImagesTouched = useCallback(() => {
    setImagesTouched(imagesTouched - 1);
  });

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  useEffect(() => {
    if (isGameStarted) {
      setImagesTouched(0);
    }
  }, [isGameStarted]);

  //
  useEffect(() => {
    if (checkDoubleTouch) {
      if (imagesTouched < 2) {
        Vibration.vibrate(100);
        reduceTimeLeft(1000);
        // ------------------------------------------------------- TODO: Warn user he should hold two fingers
      }
      setCheckDoubleTouch(false);
    }
  }, [checkDoubleTouch, imagesTouched]);

  // Detect if we're touching one or two images
  useEffect(() => {
    if (imagesTouched === 1 && isGameStarted) {
      setTimeout(() => setCheckDoubleTouch(true), 500);
    } else if (imagesTouched === 2) {
      if (!isGameStarted) {
        onStartGame();
      }
    }
  }, [imagesTouched]);

  const image = require("../../assets/images/cookie.jpg");
  return (
    <PageLayout>
      <View style={styles.container}>
        <View onTouchStart={incImagesTouched} onTouchEnd={decImagesTouched}>
          <ImageBackground style={styles.imageBox} source={image} resizeMode="cover">
            <SignatureCapture
              ref={image1ref}
              style={{ flex: 1 }}
              strokeColor={colors.pink}
              minStrokeWidth={50}
              backgroundColor="transparent"
              showNativeButtons={false}
              onSaveEvent={data => onSaveImage(0, data)}
            />
          </ImageBackground>
          {!isGameStarted && <View style={styles.drawBlocker}></View>}
        </View>
        <View style={styles.timerBlock}>
          <Text style={styles.timerText}>{timeLeft < 0 ? 0 : (timeLeft / 1000).toFixed(0)}</Text>
          <Button title="Done" onPress={handlePressDone} disabled={!isGameStarted} />
        </View>
        <View onTouchStart={incImagesTouched} onTouchEnd={decImagesTouched}>
          <ImageBackground style={styles.imageBox} source={image} resizeMode="cover">
            <SignatureCapture
              ref={image2ref}
              style={{ flex: 1 }}
              strokeColor={colors.pink}
              minStrokeWidth={50}
              backgroundColor="transparent"
              showNativeButtons={false}
              showTitleLabel={true}
              onSaveEvent={data => onSaveImage(1, data)}
            />
          </ImageBackground>
          {!isGameStarted && <View style={styles.drawBlocker}></View>}
        </View>
      </View>
    </PageLayout>
  );
};
