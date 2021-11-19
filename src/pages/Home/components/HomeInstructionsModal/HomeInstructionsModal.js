import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeInstructionsModal.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Popup } from "../../../../library/Molecules/Popup";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { GAMES_DESCIPTIONS } from "../../../../../constants";
import { HomeShapeCircle } from "../HomeGameCard/HomeShapes/HomeShapeCircle";
import { HomeShapeSquare } from "../HomeGameCard/HomeShapes/HomeShapeSquare";
import { HomeShapeTriangle } from "../HomeGameCard/HomeShapes/HomeShapeTriangle";
import { Accordion } from "../../../../library/Molecules/Accordion";

export const HomeInstructionsModal = ({ open, startGame, resetGame, toggleModal, disabled, completed, gameNumber }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const Figure = useMemo(() => {
    switch (gameNumber) {
      case 1:
        return HomeShapeCircle;
      case 2:
        return HomeShapeTriangle;
      default:
        return HomeShapeSquare;
    }
  }, [gameNumber]);

  if (disabled || completed) {
    return (
      <Popup title={`Game ${gameNumber + 1}`} open={open}>
        <View>
          {/* <Figure /> */}
          <Text style={stylesWithTheme.informalText}>
            {disabled
              ? "This game is locked. You need to win the previous one to enter."
              : "You've already passed this game. Proceed to the next one!"}
          </Text>
        </View>
        <VerticalLayout style={stylesWithTheme.footer}>
          <PrimaryButton title="Ok" onPress={toggleModal} />
        </VerticalLayout>
      </Popup>
    );
  }
  return (
    <Popup title={`Game ${gameNumber}`} open={open}>
      <ScrollView>
        <Text style={stylesWithTheme.setting}>{GAMES_DESCIPTIONS[gameNumber].setting}</Text>
        <Accordion title={"About the game"}>
          <Text style={stylesWithTheme.description}>
            Game {gameNumber} - {GAMES_DESCIPTIONS[gameNumber].description}
          </Text>
        </Accordion>
        <Accordion title={"Rules"}>
          {GAMES_DESCIPTIONS[gameNumber].rules.map((rule, index) => (
            <Text key={`${rule}-${index}`} style={stylesWithTheme.description}>
              - {rule}
            </Text>
          ))}
        </Accordion>
      </ScrollView>
      <VerticalLayout style={stylesWithTheme.footer}>
        <PrimaryButton title="Start game" style={stylesWithTheme.firstButton} onPress={startGame} />
        {gameNumber !== 0 && (
          <PrimaryButton
            title="Reset game session"
            style={{ backgroundColor: theme.colors.blue }}
            onPress={resetGame}
          />
        )}
        <BaseButton title={"Cancel"} onPress={toggleModal} />
      </VerticalLayout>
    </Popup>
  );
};
