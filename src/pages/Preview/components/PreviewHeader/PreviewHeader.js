import React, { useCallback } from "react";
import { Text } from "react-native";
import { styles } from "./PreviewHeader.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";

export const PreviewHeader = ({ navigation }) => {
  const [stylesWithTheme] = useStylesWithTheme(styles);

  const onOpenHomeScreen = useCallback(() => navigation.navigate("DrawerContainer"));

  return (
    <VerticalLayout style={stylesWithTheme.container}>
      <VerticalLayout>
        <Text style={stylesWithTheme.subtitle}>Welcome to</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.leftText]}>Brain</Text>
        <Text style={[stylesWithTheme.title, stylesWithTheme.rightText]}>Game</Text>
      </VerticalLayout>
      <PrimaryButton title={"Start game"} style={stylesWithTheme.button} onPress={onOpenHomeScreen} />
    </VerticalLayout>
  );
};
