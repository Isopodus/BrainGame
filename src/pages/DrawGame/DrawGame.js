import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, Vibration, Button, TouchableOpacity } from "react-native";
import { drawGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./DrawGame.styles";
import { colors } from "../../ui/colors";
import { useSelector } from "react-redux";
import { api } from "../../requests/api";
// import { EndGameModal } from "../_common/EndGameModal/EndGameModal";
// import { useOpenClose } from "../../hooks/useOpenClose";
// import { Backdrop } from "../../library/Atoms/Backdrop";
// import { useToggle } from "../../hooks/useToggle";
// import { StartGameBackdrop } from "../_common/StartGameBackdrop/StartGameBackdrop";

import SignatureCapture from "react-native-signature-capture";
import Orientation from "react-native-orientation";

export const DrawGame = ({ navigation, route }) => {
  const config = drawGame[route.params.difficulty]; // Idx 0 defines level 1 of 3

  const token = useSelector(state => state.token);

  const [imagesTouched, setImagesTouched] = useState(0);
  const [checkDoubleTouch, setCheckDoubleTouch] = useState(false);
  const [outputImages, setOutputImages] = useState([null, null]);

  // const [isEndGameModalOpen, openEndGameModal, closeEndGameModal] = useOpenClose(false);

  // const [savingResultsLoading, toggleSavingResultsLoading] = useToggle(false);

  const image1ref = useRef();
  const image2ref = useRef();

  const countPoints = useCallback((multiplier, imagesDistance) => {
    return (timeLeft / config.GAME_TIME_MS) * multiplier - imagesDistance * 300 + 300;
  });

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    api.closeSession({ score: countPoints(100, 0.5) }, token).then(data => {
      navigation.navigate("Home", { newSession: null });
      Orientation.lockToPortrait();
    });
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);
    api.updateSession({ score: countPoints(1000, 0) }, token).then(data => {
      navigation.navigate("Home", { newSession: data.data });
      Orientation.lockToPortrait();
    });
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
      {/* <StartGameBackdrop onUnmount={() => {}} /> */}

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

      {/* <EndGameModal open={isEndGameModalOpen} toggleModal={closeEndGameModal} gameNumber={1} isWinner /> */}

      {/* {savingResultsLoading && <Backdrop />} */}
    </PageLayout>
  );
};
