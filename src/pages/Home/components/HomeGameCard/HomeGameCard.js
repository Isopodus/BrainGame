import React, { useMemo } from "react";
import { Text } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeGameCard.styles";
import { RowLayout } from "../../../../library/Layouts/RowLayout";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { Button } from "../../../../library/Atoms/Button";
import { HomeShapeCircle } from "./HomeShapes/HomeShapeCircle";
import { HomeShapeSquare } from "./HomeShapes/HomeShapeSquare";
import { HomeShapeTriangle } from "./HomeShapes/HomeShapeTriangle";

export const HomeGameCard = ({ style, title, figure, reverse = false, disabled }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

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
    <RowLayout style={[style, stylesWithTheme.container, reverse && { flexDirection: "row-reverse" }]}>
      <VerticalLayout style={[stylesWithTheme.figure, { alignItems: reverse ? "flex-end" : "flex-start" }]}>
        <Figure />
      </VerticalLayout>
      <VerticalLayout style={stylesWithTheme.content}>
        <Text style={stylesWithTheme.title}>{title}</Text>
        <Button title={disabled ? "Locked" : "Start"} style={stylesWithTheme.button} disabled={disabled} />
      </VerticalLayout>
    </RowLayout>
  );
};
