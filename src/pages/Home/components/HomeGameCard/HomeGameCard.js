import React from "react";
import { View, Text } from "react-native";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { styles } from "./HomeGameCard.styles";
import { RowLayout } from "../../../../library/Layouts/RowLayout";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { Button } from "../../../../library/Atoms/Button";

export const HomeGameCard = ({ title, reverse = false }) => {
  const stylesWithTheme = useStylesWithTheme(styles);
  return (
    <RowLayout style={[stylesWithTheme.container, reverse && { flexDirection: "row-reverse" }]}>
      <VerticalLayout style={[stylesWithTheme.figure, { alignItems: reverse ? "flex-end" : "flex-start" }]}>
        <View style={stylesWithTheme.circle} />
      </VerticalLayout>
      <VerticalLayout style={stylesWithTheme.content}>
        <Text style={stylesWithTheme.title}>{title}</Text>
        <Button title="Start" style={stylesWithTheme.button} />
      </VerticalLayout>
    </RowLayout>
  );
};
