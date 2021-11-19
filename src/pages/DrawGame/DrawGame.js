import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, ImageBackground, Vibration, Image } from "react-native";
import { drawGame } from "../../../constants";
import { useGameTimer } from "../../hooks/useGameTimer";
import { PageLayout } from "../../library/Layouts/PageLayout";
import { styles } from "./DrawGame.styles";
import { useSelector } from "react-redux";
import { api } from "../../requests/api";
import { useStylesWithTheme } from "../../hooks/useStylesWithTheme";
import { Animation } from "../../library/Atoms/Animations";
import { PrimaryButton } from "../../library/Atoms/Button/PrimaryButton";
// import { EndGameModal } from "../_common/EndGameModal/EndGameModal";
// import { useOpenClose } from "../../hooks/useOpenClose";
// import { Backdrop } from "../../library/Atoms/Backdrop";
// import { useToggle } from "../../hooks/useToggle";
// import { StartGameBackdrop } from "../_common/StartGameBackdrop/StartGameBackdrop";

import SignatureCapture from "react-native-signature-capture";
import Orientation from "react-native-orientation";
import { RowLayout } from "../../library/Layouts/RowLayout";
import { VerticalLayout } from "../../library/Layouts/VerticalLayout";
import ImgToBase64 from "react-native-image-base64";
import { bgSymbols } from "../../assets/images/bgSymbols/bgSymbols";
import { symbols } from "../../assets/images/symbols/symbols";

export const DrawGame = ({ navigation, route }) => {
  const config = drawGame[route.params.difficulty]; // Idx 0 defines level 1 of 3

  const token = useSelector(state => state.token);

  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const [imagesTouched, setImagesTouched] = useState(0);
  const [checkDoubleTouch, setCheckDoubleTouch] = useState(false);
  const [inputImages, setInputImages] = useState([null, null]);
  const [outputImages, setOutputImages] = useState([]);

  // const [isEndGameModalOpen, openEndGameModal, closeEndGameModal] = useOpenClose(false);

  // const [savingResultsLoading, toggleSavingResultsLoading] = useToggle(false);

  const image1ref = useRef();
  const image2ref = useRef();

  const countPoints = useCallback((multiplier, imagesDistance) => {
    return (timeLeft / config.GAME_TIME_MS) * multiplier - (imagesDistance / 40) * 300 + 300;
  });

  const compareImages = useCallback(
    (isWinner, outputImages) => {
      if (inputImages[0] !== null && inputImages[1] !== null) {
        const uri1 = Image.resolveAssetSource(symbols[inputImages[0]]).uri;
        const uri2 = Image.resolveAssetSource(symbols[inputImages[1]]).uri;
        ImgToBase64.getBase64String(uri1).then(orig1 => {
          ImgToBase64.getBase64String(uri2).then(orig2 => {
            api.compareImages({ originalImage: orig1, drawnImage: outputImages[0] }, token).then(data1 => {
              api.compareImages({ originalImage: orig2, drawnImage: outputImages[1] }, token).then(data2 => {
                const avgDistance = (data1.data.distance + data2.data.distance) / 2;
                const looser = () => {
                  api.closeSession({ score: countPoints(100, avgDistance) }, token).then(data => {
                    navigation.navigate("Home", { newSession: data.data });
                    Orientation.lockToPortrait();
                  });
                };

                if (isWinner === true) {
                  if (avgDistance >= 35) {
                    looser();
                  } else {
                    api.updateSession({ score: countPoints(1000, avgDistance) }, token).then(data => {
                      navigation.navigate("Home", { newSession: data.data });
                      Orientation.lockToPortrait();
                    });
                  }
                } else if (isWinner === false) {
                  looser();
                }
              });
            });
          });
        });
      }
    },
    [inputImages],
  );

  const handleLoose = useCallback(() => {
    Vibration.vibrate(1000);
    // ------------------------------------------------------- TODO: Do the post-game LOOSE message
  });

  const handleWin = useCallback(() => {
    Vibration.vibrate([0, 50, 50, 50, 50, 200]);
    // ------------------------------------------------------- TODO: Do the post-game WIN message
  });

  const [isGameStarted, timeLeft, onStartGame, onSetIsWinner, isWinner] = useGameTimer(
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

  const onSaveImage = useCallback(
    (imageIdx, base64) => {
      const images = [...outputImages];
      images[imageIdx] = base64.encoded;
      setOutputImages(images);

      if (images.length > 1) {
        compareImages(isWinner, images);
      }
    },
    [isWinner, outputImages],
  );

  const incImagesTouched = useCallback(() => {
    setImagesTouched(imagesTouched + 1);
  });

  const decImagesTouched = useCallback(() => {
    setImagesTouched(imagesTouched - 1);
  });

  useEffect(() => {
    Orientation.lockToLandscape();

    // Select random images from the list by difficulty
    const imagesCopy = [...config.IMAGES];
    const images = [];
    const idx = Math.floor(Math.random() * imagesCopy.length);
    images.push(imagesCopy[idx]);
    imagesCopy.splice(idx, 1);
    images.push(imagesCopy[Math.floor(Math.random() * imagesCopy.length)]);

    setInputImages(images);
  }, []);

  useEffect(() => {
    if (isGameStarted) {
      setImagesTouched(0);
    }
  }, [isGameStarted]);

  useEffect(() => {
    if (checkDoubleTouch) {
      if (imagesTouched < 2 && isWinner === null) {
        onSetIsWinner(false);
      }
      setCheckDoubleTouch(false);
    }
  }, [checkDoubleTouch, imagesTouched, isWinner]);

  // Detect if we're touching one or two images
  useEffect(() => {
    if (imagesTouched === 1 && isGameStarted) {
      setTimeout(() => setCheckDoubleTouch(true), 1000);
    } else if (imagesTouched === 2 && !isGameStarted) {
      onStartGame();
    }
  }, [imagesTouched]);

  const cookie = require("../../assets/images/cookie.png");
  return (
    <PageLayout>
      {/* <StartGameBackdrop onUnmount={() => {}} /> */}
      <RowLayout style={stylesWithTheme.container}>
        <VerticalLayout
          style={stylesWithTheme.imageContainer}
          onTouchStart={incImagesTouched}
          onTouchEnd={decImagesTouched}
        >
          <ImageBackground style={stylesWithTheme.imageBox} source={cookie} resizeMode={"center"}>
            <ImageBackground
              style={stylesWithTheme.innerImageBox}
              source={bgSymbols[inputImages[0]]}
              resizeMode={"center"}
            >
              <SignatureCapture
                ref={image1ref}
                style={{ flex: 1 }}
                strokeColor={theme.colors.pink}
                minStrokeWidth={50}
                backgroundColor="transparent"
                showNativeButtons={false}
                onSaveEvent={data => onSaveImage(0, data)}
              />
            </ImageBackground>
          </ImageBackground>
          {!isGameStarted && <View style={stylesWithTheme.drawBlocker} />}
        </VerticalLayout>
        <VerticalLayout style={stylesWithTheme.timerBlock}>
          <Text style={stylesWithTheme.title}>Drawing</Text>
          <Animation name={"clock"} play={isGameStarted} style={stylesWithTheme.animation} />
          <Text style={[stylesWithTheme.time, (timeLeft / 1000).toFixed(0) < 5 && { color: theme.colors.red }]}>
            {timeLeft < 0 ? 0 : (timeLeft / 1000).toFixed(0)}
          </Text>
          <PrimaryButton
            title={"Done"}
            style={stylesWithTheme.button}
            textStyle={stylesWithTheme.buttonText}
            onPress={handlePressDone}
            disabled={!isGameStarted}
          />
        </VerticalLayout>
        <VerticalLayout
          style={stylesWithTheme.imageContainer}
          onTouchStart={incImagesTouched}
          onTouchEnd={decImagesTouched}
        >
          <ImageBackground style={stylesWithTheme.imageBox} source={cookie} resizeMode={"center"}>
            <ImageBackground
              style={stylesWithTheme.innerImageBox}
              source={bgSymbols[inputImages[1]]}
              resizeMode={"center"}
            >
              <SignatureCapture
                ref={image2ref}
                style={{ flex: 1 }}
                strokeColor={theme.colors.pink}
                minStrokeWidth={50}
                backgroundColor="transparent"
                showNativeButtons={false}
                showTitleLabel={true}
                onSaveEvent={data => onSaveImage(1, data)}
              />
            </ImageBackground>
          </ImageBackground>
          {!isGameStarted && <View style={stylesWithTheme.drawBlocker} />}
        </VerticalLayout>
      </RowLayout>

      {/* <EndGameModal open={isEndGameModalOpen} toggleModal={closeEndGameModal} gameNumber={1} isWinner /> */}

      {/* {savingResultsLoading && <Backdrop />} */}
    </PageLayout>
  );
};
