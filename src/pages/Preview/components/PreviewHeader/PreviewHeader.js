import React from "react";
import { View, Text } from "react-native";
import { styles } from "./PreviewHeader.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { Button } from "../../../../library/Atoms/Button";

export const PreviewHeader = () => {
  const stylesWithTheme = useStylesWithTheme(styles);
  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <VerticalLayout style={stylesWithTheme.textBlock}>
        <Text style={stylesWithTheme.subtitle}>Welcome to</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.leftText]}>Brain</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.rightText]}>Game</Text>
      </VerticalLayout>
      <Button title={"Start game"} />
    </VerticalLayout>
  );
};
