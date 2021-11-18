import React, { useMemo } from "react";
import { Text } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeGameCard.styles";
import { RowLayout } from "../../../../library/Layouts/RowLayout";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { HomeShapeCircle } from "./HomeShapes/HomeShapeCircle";
import { HomeShapeSquare } from "./HomeShapes/HomeShapeSquare";
import { HomeShapeTriangle } from "./HomeShapes/HomeShapeTriangle";
import { useOpenClose } from "../../../../hooks/useOpenClose";
import { HomeDifficultiesModal } from "../HomeDifficultiesModal/HomeDifficultiesModal";
import { HomeInstructionsModal } from "../HomeInstructionsModal/HomeInstructionsModal";

export const HomeGameCard = ({ style, title, reverse = false, disabled, completed, gameNumber = 1 }) => {
  const [stylesWithTheme, theme] = useStylesWithTheme(styles);

  const [isDifficultiesModalOpen, openDifficultiesModal, closeDifficultiesModal] = useOpenClose(false);
  const [isInstructionsModalOpen, openInstructionsModal, closeInstructionsModal] = useOpenClose(false);

  const buttonText = useMemo(() => {
    switch (true) {
      case disabled:
        return "Locked";
      case completed:
        return "Passed";
      default:
        return "Start";
    }
  }, [disabled, completed]);

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

  return (
    <>
      <RowLayout style={[style, stylesWithTheme.container, reverse && { flexDirection: "row-reverse" }]}>
        <VerticalLayout style={[stylesWithTheme.figure, { alignItems: reverse ? "flex-end" : "flex-start" }]}>
          <Figure />
        </VerticalLayout>
        <VerticalLayout style={stylesWithTheme.content}>
          <Text style={stylesWithTheme.title}>{title}</Text>
          <PrimaryButton
            title={buttonText}
            style={[stylesWithTheme.button, completed && { backgroundColor: theme.colors.red }]}
            disabled={disabled}
            onPress={openInstructionsModal}
          />
        </VerticalLayout>
      </RowLayout>

      <HomeInstructionsModal
        open={isInstructionsModalOpen}
        toggleModal={closeInstructionsModal}
        gameNumber={gameNumber}
        disabled={disabled}
        completed={completed}
      />

      <HomeDifficultiesModal open={isDifficultiesModalOpen} toggleModal={closeDifficultiesModal} />
    </>
  );
};
