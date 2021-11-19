import React, { useCallback, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { useStylesWithTheme } from "../../../hooks/useStylesWithTheme";
import { styles } from "./EndGameModal.styles";
import { VerticalLayout } from "../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../library/Atoms/Button/PrimaryButton";
import { Popup } from "../../../library/Molecules/Popup";
import { useNavigation } from "@react-navigation/native";

export const EndGameModal = ({ open, toggleModal, isWinner, gameNumber }) => {
  const { navigate } = useNavigation();

  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const onPress = useCallback(() => {
    toggleModal();
    gameNumber === 3 || !isWinner ? navigate("Rating") : navigate("Home");
  }, [gameNumber]);

  return (
    <Popup title={`Game ${gameNumber + 1}`} open={open}>
      <View>
        <Text style={stylesWithTheme.statusSecondaryText}>
          {isWinner ? "Congratulations, you" : "Unfortunately, you"}
        </Text>
        <Text style={[stylesWithTheme.statusMainText, !isWinner && { color: theme.colors.red }]}>
          {isWinner ? "won!" : "lost :("}
        </Text>
      </View>
      <View>
        <Text style={stylesWithTheme.scoreText}>Your score is:</Text>
        <Text style={stylesWithTheme.scoreValue}>20</Text>
      </View>
      <VerticalLayout style={stylesWithTheme.footer}>
        <PrimaryButton title={gameNumber === 3 || !isWinner ? "See total score" : "Got it"} onPress={onPress} />
      </VerticalLayout>
    </Popup>
  );
};
