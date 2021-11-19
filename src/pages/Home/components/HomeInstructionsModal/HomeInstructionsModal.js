import React, { useCallback, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeInstructionsModal.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { Popup } from "../../../../library/Molecules/Popup";
import { BaseButton } from "../../../../library/Atoms/Button/BaseButton";
import { GAMES_DESCIPTIONS } from "../../../../../constants";
import { Accordion } from "../../../../library/Molecules/Accordion";

export const HomeInstructionsModal = ({ open, startGame, resetGame, toggleModal, disabled, completed, gameNumber }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const handleStartGame = useCallback(() => {
    startGame();
    toggleModal();
  }, []);

  const handleResetGame = useCallback(() => {
    resetGame();
    toggleModal();
  }, []);

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
    <Popup title={`Game ${gameNumber + 1}`} open={open}>
      <ScrollView>
        <Text style={stylesWithTheme.setting}>{GAMES_DESCIPTIONS[gameNumber].setting}</Text>
        <Accordion title={"About the game"}>
          <Text style={stylesWithTheme.description}>
            Game {gameNumber + 1} - {GAMES_DESCIPTIONS[gameNumber].description}
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
        <PrimaryButton title="Start game" style={stylesWithTheme.firstButton} onPress={handleStartGame} />
        {gameNumber !== 0 && (
          <PrimaryButton
            title="Reset game session"
            style={{ backgroundColor: theme.colors.blue }}
            onPress={handleResetGame}
          />
        )}
        <BaseButton title={"Cancel"} onPress={toggleModal} />
      </VerticalLayout>
    </Popup>
  );
};
