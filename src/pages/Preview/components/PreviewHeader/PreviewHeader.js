import React, { useCallback } from "react";
import { Text } from "react-native";
import { styles } from "./PreviewHeader.styles";
import { VerticalLayout } from "../../../../library/Layouts/VerticalLayout";
import { useStylesWithTheme } from "../../../../hooks/useStylesWithTheme";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../../../../library/Atoms/Button/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

export const PreviewHeader = () => {
  const { navigate } = useNavigation();

  const token = useSelector(state => state.token);

  const [stylesWithTheme] = useStylesWithTheme(styles);

  const onOpenHomeScreen = useCallback(() => {
    if (!token) navigate("Auth");
    else navigate("DrawerContainer");
  }, [token]);

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
