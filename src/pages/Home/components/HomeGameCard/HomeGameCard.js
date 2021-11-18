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

export const HomeGameCard = ({ style, title, figure, reverse = false, disabled }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const [isDifficultiesModalOpen, openDifficultiesModal, closeDifficultiesModal] = useOpenClose(false);

  const Figure = useMemo(() => {
    switch (figure) {
      case "circle":
        return HomeShapeCircle;
      case "triangle":
        return HomeShapeTriangle;
      default:
        return HomeShapeSquare;
    }
  }, [figure]);

  return (
    <>
      <RowLayout style={[style, stylesWithTheme.container, reverse && { flexDirection: "row-reverse" }]}>
        <VerticalLayout style={[stylesWithTheme.figure, { alignItems: reverse ? "flex-end" : "flex-start" }]}>
          <Figure />
        </VerticalLayout>
        <VerticalLayout style={stylesWithTheme.content}>
          <Text style={stylesWithTheme.title}>{title}</Text>
          <PrimaryButton
            title={disabled ? "Locked" : "Start"}
            style={stylesWithTheme.button}
            disabled={disabled}
            onPress={openDifficultiesModal}
          />
        </VerticalLayout>
      </RowLayout>

      <HomeDifficultiesModal open={isDifficultiesModalOpen} toggleModal={closeDifficultiesModal} />
    </>
  );
};
